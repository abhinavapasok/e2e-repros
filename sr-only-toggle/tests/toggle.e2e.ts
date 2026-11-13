import { expect, test } from 'e2e';

test('checks a toggle switch', async ({ app, screen }) => {
  await app.open();
  const toggle = screen.getByRole('checkbox', 'Email notifications');
  await toggle.check();
  await expect(toggle).toBeChecked();
});

test('taps a toggle switch', async ({ app, screen }) => {
  await app.open();
  const toggle = screen.getByRole('checkbox', 'Email notifications');
  await toggle.tap();
  await expect(toggle).toBeChecked();
});

test('checks an sr-only checkbox in a text-only label', async ({ app, screen }) => {
  await app.open();
  const box = screen.getByRole('checkbox', 'Plain label');
  await box.check();
  await expect(box).toBeChecked();
});
