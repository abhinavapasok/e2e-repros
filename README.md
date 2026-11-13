# e2e reproductions

Minimal reproductions for [e2e](https://github.com/e2e-inc/e2e) bug reports.
Each folder is a standalone project on the published packages
(`e2e` 0.23.0, `@e2e-dev/web` 0.15.5). The app is a one-line static page
(`server.mjs`), so no model key is needed.

| Folder | Bug |
| --- | --- |
| [`timeout-overflow`](./timeout-overflow) | A config `timeout` above 2147483647 ms makes every test time out at once |
| [`markdown-ampersand`](./markdown-ampersand) | The `markdown` reporter does not escape `&`, so entity text in a title renders as a character |
| [`junit-crlf`](./junit-crlf) | The `junit` reporter turns `\r` into U+FFFD; the `&#13;` encoding never applies |
