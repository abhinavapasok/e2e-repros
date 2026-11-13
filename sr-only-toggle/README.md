# `check()` / `tap()` on a Tailwind `sr-only` checkbox inside its label

```sh
npm install
npx e2e run
```

The page is the usual Tailwind toggle: `<label><input type="checkbox" class="sr-only">…</label>`.
All three tests fail with `ACTION_FAILED: … intercepts pointer events`.
Remove only `margin: -1px` from `.sr-only` in `server.mjs` and they pass
(on the current nightly, which has the label stand-in).
