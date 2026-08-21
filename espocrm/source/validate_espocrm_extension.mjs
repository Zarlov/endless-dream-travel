import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const sourceDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(sourceDir, 'extension');
const moduleRoot = path.join(root, 'files/custom/Espo/Modules/EndlessDreamTravel');
const metadataDir = path.join(moduleRoot, 'Resources/metadata');
const errors = [];
const jsonFiles = fs.readdirSync(root, { recursive: true }).filter(x => x.endsWith('.json'));

for (const rel of jsonFiles) {
  try { JSON.parse(fs.readFileSync(path.join(root, rel), 'utf8')); }
  catch (e) { errors.push(`${rel}: ${e.message}`); }
}

const scopesDir = path.join(metadataDir, 'scopes');
const entityDir = path.join(metadataDir, 'entityDefs');
const customEntities = fs.readdirSync(scopesDir).filter(x => x.endsWith('.json')).map(x => path.basename(x, '.json'));
const defs = {};
for (const file of fs.readdirSync(entityDir).filter(x => x.endsWith('.json'))) defs[path.basename(file, '.json')] = JSON.parse(fs.readFileSync(path.join(entityDir, file), 'utf8'));

for (const entity of customEntities) {
  for (const required of [
    `Resources/metadata/entityDefs/${entity}.json`, `Resources/metadata/clientDefs/${entity}.json`,
    `Controllers/${entity}.php`, `Entities/${entity}.php`, `Resources/i18n/en_US/${entity}.json`,
    `Resources/layouts/${entity}/detail.json`, `Resources/layouts/${entity}/list.json`, `Resources/layouts/${entity}/filters.json`, `Resources/layouts/${entity}/bottomPanelsDetail.json`
  ]) if (!fs.existsSync(path.join(moduleRoot, required))) errors.push(`Missing ${required}`);
  const def = defs[entity];
  if (!def?.fields?.externalId) errors.push(`${entity} missing externalId`);
  if (!def?.indexes?.externalIdUnique?.unique) errors.push(`${entity} missing unique external-ID index`);
}

for (const [entity, def] of Object.entries(defs)) {
  for (const [name, rel] of Object.entries(def.links || {})) {
    if (!rel.entity || !rel.foreign || !defs[rel.entity]) continue;
    const inverse = defs[rel.entity]?.links?.[rel.foreign];
    if (!inverse) errors.push(`${entity}.${name} inverse ${rel.entity}.${rel.foreign} missing`);
    else if (inverse.entity !== entity) errors.push(`${entity}.${name} inverse entity mismatch`);
  }
}

const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.json'), 'utf8'));
if (manifest.version !== '1.0.34') errors.push('Unexpected manifest version');
if (!manifest.acceptableVersions?.some(x => x.includes('10.0.0'))) errors.push('EspoCRM 10 compatibility missing');
for (const favicon of ['favicon.ico', 'favicon-196.png', 'favicon.svg']) {
  const customFaviconPath = path.join(root, 'files/client/custom/modules/endless-dream-travel/img', favicon);
  if (!fs.existsSync(customFaviconPath) || fs.statSync(customFaviconPath).size === 0) errors.push(`Missing custom ${favicon}`);
}
if (!fs.existsSync(path.join(root, 'files/client/custom/modules/endless-dream-travel/js/favicon-v1.0.28.js'))) errors.push('Missing persistent favicon loader');

console.log(JSON.stringify({ ok: errors.length === 0, errors, jsonFiles: jsonFiles.length, customEntities: customEntities.length, externalIdIndexes: customEntities.filter(x => defs[x]?.indexes?.externalIdUnique?.unique).length }, null, 2));
if (errors.length) process.exit(1);
