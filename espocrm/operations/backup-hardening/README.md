# CRM backup hardening

This package keeps the existing database and EspoCRM volume backup commands intact while adding:

- fixed 02:30 and 02:45 schedules in the `America/New_York` time zone;
- Uptime Kuma success/failure heartbeats and 26-hour stale checks;
- 14 daily, 8 weekly, and 12 monthly retained copies;
- a permanent January 1 archive labeled `<prior-year>-records`;
- an age-encrypted paired database/application export, with 14 local staging bundles.

Private Uptime Kuma URLs are stored only in `/etc/default/crm-backup-alerts` on the VM and are not part of this package or Git history.

Install from the VM with:

```sh
sudo /home/ddriver/crm-backup-hardening/install-crm-backup-hardening
```

Copy the generated recovery key off the VM before deleting its VM copy. The public recipient remains on the VM and is sufficient to create new encrypted exports; the private recovery key is required to decrypt them.
