import { test, expect } from '@playwright/test';

test.describe('Desktop Navigation Dropdown Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    // Ensure desktop viewport
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
  });

  test('trigger exposes aria-expanded and aria-controls linking to menu', async ({
    page,
  }) => {
    const trigger = page.locator('#nav-dropdown-trigger-about-us');
    await expect(trigger).toBeVisible();
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');

    const menuId = await trigger.getAttribute('aria-controls');
    expect(menuId).toBe('nav-dropdown-menu-about-us');

    // Click to open
    await trigger.click();
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');

    // Verify menu is visible and matches ID
    const menu = page.locator(`#${menuId}`);
    await expect(menu).toBeVisible();
  });

  test('Escape key closes dropdown and restores focus to trigger', async ({
    page,
  }) => {
    const trigger = page.locator('#nav-dropdown-trigger-about-us');
    await trigger.focus();
    await page.keyboard.press('Enter');

    const menu = page.locator('#nav-dropdown-menu-about-us');
    await expect(menu).toBeVisible();

    // Press Escape
    await page.keyboard.press('Escape');

    await expect(menu).toBeHidden();
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await expect(trigger).toBeFocused();
  });
});
