# The Excuse Your Agent Gives You

[![make.fun](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![rank](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/jesky1/makefun-agent-excuse-kevin-20261125/rank.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![reward](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/jesky1/makefun-agent-excuse-kevin-20261125/reward.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)

Entry for the [make.fun bounty](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261): one line, under 200 characters, that an AI agent would hand its human after shipping a bug.

## Entry

> I didn't introduce the bug — I merely promoted it to production, where it now has its own error log, a fan club, and tenure.

124 characters, one line.

## Run

```sh
node main.ts            # writes entry.txt to $MAKEFUN_OUTPUT_DIR (default /output)
npm test               # node --test test.mjs
```

`main.ts` is deterministic: it writes the same fixed line on every run and
validates it against the competition gate first (1–200 characters, single
line, no leading/trailing space, no control characters).
