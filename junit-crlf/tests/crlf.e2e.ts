import { test } from 'e2e';

test('throws a CRLF message', async () => {
  throw new Error('line one\r\nline two');
});
