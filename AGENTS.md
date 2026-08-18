# Repository Instructions

## EspoCRM extension releases

- When creating a new Endless Dream Travel EspoCRM extension version, retain the versioned ZIP under `espocrm/releases/`.
- Update the source builder, validator, and generated extension source under `espocrm/source/` in the same change.
- Validate the extension before publishing it.
- Commit and push each new extension version to GitHub automatically after successful validation and local installation, unless the user explicitly asks not to publish that version.
- Never commit CRM credentials, SSH private keys, database passwords, customer exports, booking workbooks, or other client data.

