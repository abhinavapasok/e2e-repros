# Config `timeout` above 2^31-1 ms times out at once

```sh
npm install
npx e2e run
```

`e2e.config.ts` sets `timeout: 3_000_000_000`. The config accepts it, Node
clamps the timer to 1 ms (`TimeoutOverflowWarning`), and the test that waits
200 ms fails with `TEST_TIMEOUT: test timed out after 3000000000 ms in phase body`, exit 1.

Change it to `2_147_483_647` and the same test passes. The CLI flag equivalent
`--action-timeout 3000000000` is rejected as a usage error.
