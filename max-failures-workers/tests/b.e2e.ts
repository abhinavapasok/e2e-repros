import { test } from 'e2e';

test('b fails', async ({ app }) => {
  await app.open();
  throw new Error('b broke');
});

test('b next', async ({ app }) => {
  await app.open();
});

test('b last', async ({ app }) => {
  await app.open();
});
