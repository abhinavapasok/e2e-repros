# `markdown` reporter does not escape `&`

```sh
npm install
npx e2e run
grep copy .e2e/summary.md
```

The test title is `renders &copy; and &lt;b&gt; literally`. `summary.md`
writes it unescaped, so GitHub (job summary, `@e2e-dev/github` comment)
renders it as `renders © and <b> literally`.
