import { test } from 'e2e';

test('a fails', async ({ app }) => {
  await app.open();
  throw new Error('a broke');
});

test('a next', async ({ app }) => {
  await app.open();
});

test('a last', async ({ app }) => {
  await app.open();
});
