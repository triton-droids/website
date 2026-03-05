import { test, expect } from '@playwright/test';

test.describe('Mobile Header / Hamburger Menu', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('hamburger menu opens when clicked', async ({ page }) => {
    const menuButton = page.getByRole('button', {
      name: 'Open navigation menu',
    });
    await expect(menuButton).toBeVisible();

    await menuButton.click();

    const header = page.getByRole('banner');
    await expect(
      page.getByRole('button', { name: 'Close navigation menu' })
    ).toBeVisible();
    await expect(header.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(header.getByRole('link', { name: 'Join' })).toBeVisible();
    await expect(
      header.getByRole('link', { name: 'DONATE' }).last()
    ).toBeVisible();
  });

  test('hamburger menu closes when close button clicked', async ({
    page,
  }) => {
    await page.getByRole('button', { name: 'Open navigation menu' }).click();
    await page.getByRole('button', { name: 'Close navigation menu' }).click();

    await expect(
      page.getByRole('button', { name: 'Open navigation menu' })
    ).toBeVisible();
  });

  test('About Us expands to show sub-items', async ({ page }) => {
    await page.getByRole('button', { name: 'Open navigation menu' }).click();

    const header = page.getByRole('banner');
    await expect(
      header.getByRole('link', { name: 'Executive Team' })
    ).toBeHidden();

    await header.getByRole('button', { name: 'About Us' }).click();

    await expect(
      header.getByRole('link', { name: 'Executive Team' })
    ).toBeVisible();
    await expect(header.getByRole('link', { name: 'Alumni' })).toBeVisible();
    await expect(header.getByRole('link', { name: 'Advisor' })).toBeVisible();
  });

  test('Projects expands to show sub-items', async ({ page }) => {
    await page.getByRole('button', { name: 'Open navigation menu' }).click();

    const header = page.getByRole('banner');
    await header.getByRole('button', { name: 'Projects' }).click();

    await expect(
      header.getByRole('link', { name: 'Humanoid Robot' })
    ).toBeVisible();
    await expect(
      header.getByRole('link', { name: 'Learning Projects' })
    ).toBeVisible();
    await expect(header.getByRole('link', { name: 'RoboCup' })).toBeVisible();
  });

  test('clicking nav link closes menu and navigates', async ({ page }) => {
    await page.getByRole('button', { name: 'Open navigation menu' }).click();
    await page.getByRole('banner').getByRole('link', { name: 'Join' }).click();

    await expect(page).toHaveURL(/\/join/);
  });

  test('clicking sub-item closes menu and navigates', async ({ page }) => {
    await page.getByRole('button', { name: 'Open navigation menu' }).click();
    await page
      .getByRole('banner')
      .getByRole('button', { name: 'About Us' })
      .click();
    await page.getByRole('banner').getByRole('link', { name: 'Alumni' }).click();

    await expect(page).toHaveURL(/\/alumni/);
  });

  test('clicking outside closes menu', async ({ page }) => {
    await page.getByRole('button', { name: 'Open navigation menu' }).click();
    await expect(
      page.getByRole('banner').getByRole('link', { name: 'Home' })
    ).toBeVisible();

    await page.evaluate(() => {
      document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    });

    await expect(
      page.getByRole('button', { name: 'Open navigation menu' })
    ).toBeVisible();
  });
});

test.describe('Desktop Header', () => {
  test('desktop view shows horizontal nav, not hamburger', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');

    const header = page.getByRole('banner');
    await expect(
      page.getByRole('button', { name: 'Open navigation menu' })
    ).toBeHidden();
    await expect(header.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(
      header.getByRole('link', { name: 'Sponsorship' })
    ).toBeVisible();
  });
});
