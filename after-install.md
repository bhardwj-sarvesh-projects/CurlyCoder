# CURLYCODER for Hermes installed

Enable it if you did not install with `--enable`:

```bash
hermes plugins enable CURLYCODER
```

Restart Hermes or the gateway after enabling.

In shared gateways, restrict `/CURLYCODER` to trusted users with Hermes slash-command access controls; runtime mode is process-local.

Commands:

- `/CURLYCODER [lite|full|ultra|off]`
- `/CURLYCODER-review [target]`
- `/CURLYCODER-audit [target]`
- `/CURLYCODER-debt`
- `/CURLYCODER-gain`
- `/CURLYCODER-help`

Bundled skills are available as `CURLYCODER:CURLYCODER`, `CURLYCODER:CURLYCODER-review`, `CURLYCODER:CURLYCODER-audit`, `CURLYCODER:CURLYCODER-debt`, `CURLYCODER:CURLYCODER-gain`, and `CURLYCODER:CURLYCODER-help`.
