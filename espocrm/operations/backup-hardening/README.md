# CRM backup hardening

This package keeps the proven database and EspoCRM volume capture and verification logic while changing storage boundaries:

- fixed 02:30 and 02:45 schedules in the `America/New_York` time zone;
- Uptime Kuma success/failure heartbeats and 26-hour stale checks;
- 14 daily, 8 weekly, and 12 monthly retained copies;
- a permanent January 1 archive labeled `<prior-year>-records`;
- readable database and application archives remain only on the CRM VM for 14 days;
- OSIRIS receives only age-encrypted paired database/application archives;
- encrypted retention is 14 daily, 8 weekly, 12 monthly, and permanent yearly archives labeled `<year>-records`.

Private Uptime Kuma URLs are stored only in `/etc/default/crm-backup-alerts` on the VM and are not part of this package or Git history.

Install from the VM with:

```sh
sudo /home/ddriver/crm-backup-hardening/install-crm-backup-hardening
```

The public recipient remains on the VM and is sufficient to create new encrypted exports; the private recovery key stored separately is required to decrypt them. The installer will not rotate an existing recipient or regenerate a deleted private key.
