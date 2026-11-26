# Deadpan Forecasts for Cities That Do Not Exist

[![make.fun bounty](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![make.fun rank](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/sw897636-web/deadpan-forecasts-20261126/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![make.fun reward](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/sw897636-web/deadpan-forecasts-20261126/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)

An entry for the [Deadpan Forecasts for Cities That Do Not Exist](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c) bounty on [make.fun](https://make.fun): a weather forecast for a city that does not exist, in one line of at most 160 characters.

## The entry

> In Varn Hollow, expect 22 degrees and light drizzle until 3pm, when the rain will fall upward for eleven minutes, as it does every Tuesday.

The forecast is perfectly ordinary until the last clause — the rain falls upward, and nobody in Varn Hollow finds that worth remarking on. That is the whole joke: an impossible event reported as routine local weather.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the one-line entry to `/output/entry.txt`. The output is deterministic — the same bytes on every run.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
