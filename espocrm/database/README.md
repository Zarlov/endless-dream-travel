# EspoCRM database schema

`espocrm-clean-schema.sql` is a schema-only export of the live EspoCRM PostgreSQL database. It contains database objects, fields, relationships, indexes, and constraints, but no table rows or customer data.

Generated on 2026-08-18 with PostgreSQL 16.14 using:

```sh
pg_dump --schema-only --no-owner --no-privileges -U crm crm
```

The dump was verified by restoring it with `psql -v ON_ERROR_STOP=1` into a temporary empty database and then successfully dumping that restored schema again.

SHA-256:

```text
7400DD65E3108447C3F2144746929E2C33C1746C45604D5B2E5E5665821E08B8  espocrm-clean-schema.sql
```

This file is a development/reference artifact, not a customer-data backup. Never commit a data-bearing database dump to this repository.
