# `junit` reporter turns `\r` into U+FFFD

```sh
npm install
npx e2e run
grep -n "line one" .e2e/junit.xml
```

The test throws `new Error('line one\r\nline two')`. `junit.xml` has
`message="line one�&#10;line two"`: the `\r` became U+FFFD instead of `&#13;`.
