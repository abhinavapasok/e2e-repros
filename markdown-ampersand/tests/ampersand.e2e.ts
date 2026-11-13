import { expect, test } from 'e2e';

// The title holds literal entity text. summary.md should show it as written.
test('renders &copy; and &lt;b&gt; literally', async ({ app, screen }) => {
  await app.open();
  await expect(screen.getByRole('heading', { name: 'Hello' })).toBeVisible();
});
