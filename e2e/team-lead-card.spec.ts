import { test, expect } from '@playwright/test';

test.describe('Team Lead Card Accessibility and Expand Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/team');
  });

  test('expands on click and closes on close button click', async ({
    page,
  }) => {
    const trigger = page.locator('#member-card-trigger-4');
    await expect(trigger).toBeVisible();
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');

    await trigger.click();

    // Verify dialog opened
    const dialog = page.locator('div[role="dialog"]');
    await expect(dialog).toBeVisible();

    // Close via close button
    const closeBtn = page.getByRole('button', {
      name: /close helena phamová's profile/i,
    });
    await expect(closeBtn).toBeVisible();
    await closeBtn.click();

    await expect(dialog).toBeHidden();
  });

  test('no dangling aria-describedby when bio is empty', async ({ page }) => {
    // Helena (id: 4) has an empty bio
    const trigger = page.locator('#member-card-trigger-4');
    await trigger.click();

    const dialog = page.locator('div[role="dialog"]');
    await expect(dialog).toBeVisible();

    // aria-describedby should not be set when bio is empty
    await expect(dialog).not.toHaveAttribute('aria-describedby');

    // aria-labelledby should correctly reference the name element
    const labelledBy = await dialog.getAttribute('aria-labelledby');
    expect(labelledBy).toBeTruthy();
    await expect(page.locator(`#${labelledBy}`)).toHaveText('Helena Phamová');
  });

  test('closes on Escape key and restores focus to trigger button', async ({
    page,
  }) => {
    const trigger = page.locator('#member-card-trigger-4');
    await trigger.focus();
    await page.keyboard.press('Enter');

    const dialog = page.locator('div[role="dialog"]');
    await expect(dialog).toBeVisible();

    // Press Escape
    await page.keyboard.press('Escape');

    await expect(dialog).toBeHidden();
    // Verify focus is restored to the trigger button
    await expect(trigger).toBeFocused();
  });

  test('expanded profile does not use button role=dialog or nest interactive elements inside buttons', async ({
    page,
  }) => {
    const trigger = page.locator('#member-card-trigger-4');
    await trigger.click();

    // Verify dialog is not rendered as a button
    await expect(page.locator('button[role="dialog"]')).toHaveCount(0);

    // Verify dialog container has no button containing an anchor
    const nestedLinks = page.locator('div[role="dialog"] button a');
    await expect(nestedLinks).toHaveCount(0);
  });
});
