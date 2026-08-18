# Endless Dream Travel EspoCRM extension

This directory preserves the custom EspoCRM data-model extension used for trips, bookings, households, clients, commissions, quotes, loyalty memberships, and related travel workflows.

## Contents

- `releases/`: immutable versioned installation ZIP packages that were retained locally.
- `source/build_espocrm_extension.mjs`: extension builder.
- `source/validate_espocrm_extension.mjs`: package validation checks.
- `source/extension/`: generated source tree for the latest release.

The installation packages contain configuration and application code only. Customer booking data and infrastructure credentials must not be committed.

