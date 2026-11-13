# `--max-failures` with several workers reports unstarted tests as `interrupted`

```sh
npm install
npx e2e run --workers 2 --max-failures 2
```

Each file starts with a failing test. Expected: `a next`, `a last`, `b next`, `b last`
skipped with cause `failure-limit`. Observed: `a next` and `b next` start and end
`interrupted` (`CANCELLED`) a few ms later. With `--workers 1` the result is as documented.
