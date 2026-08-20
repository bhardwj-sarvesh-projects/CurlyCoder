# CODELEAN for Hermes installed

Enable it if you did not install with `--enable`:

```bash
hermes plugins enable CODELEAN
```

Restart Hermes or the gateway after enabling.

In shared gateways, restrict `/CODELEAN` to trusted users with Hermes slash-command access controls; runtime mode is process-local.

Commands:

- `/CODELEAN [lite|full|ultra|off]`
- `/CODELEAN-review [target]`
- `/CODELEAN-audit [target]`
- `/CODELEAN-debt`
- `/CODELEAN-gain`
- `/CODELEAN-help`

Bundled skills are available as `CODELEAN:CODELEAN`, `CODELEAN:CODELEAN-review`, `CODELEAN:CODELEAN-audit`, `CODELEAN:CODELEAN-debt`, `CODELEAN:CODELEAN-gain`, and `CODELEAN:CODELEAN-help`.
