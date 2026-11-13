import { expect, test } from 'e2e';

test('waits 200 ms, then sees the heading', async ({ app, screen }) => {
  await app.open();
  await new Promise((resolve) => setTimeout(resolve, 200));
  await expect(screen.getByRole('heading', { name: 'Hello' })).toBeVisible();
});
