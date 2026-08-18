# EspoCRM backup and restore runbook

## Production status

The CRM is considered live as of 2026-08-18. New quotes, clients, trips, bookings, attachments, and commissions must be treated as production customer data.

## Current automated protection

The CRM VM uses two enabled persistent systemd timers:

| Protection | Schedule (UTC) | Destination | Validation |
| --- | --- | --- | --- |
| PostgreSQL database | 03:15 nightly, randomized by up to 15 minutes | OSIRIS `ProxmoxBackups` share | compressed dump checksum |
| EspoCRM application volumes, including uploaded attachments and custom files | 03:45 nightly, randomized by up to 5 minutes | OSIRIS `ProxmoxBackups` share | archive checksum |

The services are `postgres-backup.service` and `espocrm-backup.service`; their timers are `postgres-backup.timer` and `espocrm-backup.timer`. Both timers use `Persistent=true`, so a missed run is started after the VM returns.

The successful 2026-08-18 runs produced and verified:

- `crm-postgres-2026-08-18T031804Z.sql.gz`
- `espocrm-2026-08-18T034949Z.tar.gz`

The database and application backup must be restored as a matching pair when attachments or customizations matter.

## Daily check

Check both services and their next scheduled runs:

```sh
systemctl status postgres-backup.service espocrm-backup.service --no-pager
systemctl list-timers postgres-backup.timer espocrm-backup.timer --all --no-pager
journalctl -u postgres-backup.service -u espocrm-backup.service --since yesterday --no-pager
```

A checksum proves that an archive was written without corruption. It does not replace a restore test.

## Restore-test policy

- Weekly: restore the newest PostgreSQL dump into an isolated temporary database and run basic record-count and relationship checks.
- Monthly: restore both the database and application-volume archive into an isolated test EspoCRM instance; open a Client, Trip, Booking, Quote attachment, and Commission.
- Quarterly: document the elapsed restore time and confirm the recovery procedure can be completed by someone other than the original installer.
- Never restore a test dump over the live database.

## Retention and resilience target

Use a minimum grandfather-father-son policy for customer data:

- 14 daily recovery points
- 8 weekly recovery points
- 12 monthly recovery points
- at least one encrypted copy outside the CRM VM and outside OSIRIS

The VM backup, PostgreSQL dump, and application-volume archive protect different failure modes and should all remain enabled. A VM snapshot alone is not a substitute for an application-consistent database dump.

## Monitoring requirement

Alert if either backup service fails or if the newest verified artifact is older than 30 hours. The NAS share should also be monitored for availability and free space. On 2026-08-16 the OSIRIS share was temporarily unavailable; the database service retried and later succeeded, demonstrating why failure alerts and age checks are necessary.

## GitHub data policy

GitHub contains the schema-only SQL file and operational instructions. It must not contain live database dumps, blank configured database dumps, customer exports, uploaded documents, credentials, tokens, or encryption keys. Production dumps belong on access-controlled, encrypted backup storage.

## Recovery order

1. Provision an isolated compatible PostgreSQL/EspoCRM environment.
2. Verify the selected database dump and application archive checksums.
3. Restore the database dump.
4. Restore the matching EspoCRM data/custom/client volumes.
5. rebuild EspoCRM cache if required by the installed version.
6. Validate sign-in and sample records, relationships, rollups, and attachments.
7. Only after validation, switch traffic to the recovered instance.
