import { test, expect } from '@playwright/test';

test.describe('Carousel Typography', () => {
  test('AchieveSection carousel has correct typography', async ({ page }) => {
    await page.goto('/website/');

    // Wait for carousel to be visible
    await page.waitForSelector(
      'h3:has-text("Leveraging UCSD\'s Unique Assets")',
      { timeout: 10000 }
    );

    // Check title typography
    const title = page
      .locator('h3:has-text("Leveraging UCSD\'s Unique Assets")')
      .first();
    await expect(title).toBeVisible();

    const titleStyles = await title.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return {
        fontSize: styles.fontSize,
        lineHeight: styles.lineHeight,
        fontWeight: styles.fontWeight,
      };
    });

    // Check if font size is 40px (at large breakpoint)
    expect(parseFloat(titleStyles.fontSize)).toBeGreaterThanOrEqual(28);

    // Check line height is 120% for titles
    const lineHeightRatio =
      parseFloat(titleStyles.lineHeight) / parseFloat(titleStyles.fontSize);
    expect(lineHeightRatio).toBeCloseTo(1.2, 0.1);

    // Check font weight is normal (400)
    expect(titleStyles.fontWeight).toBe('400');

    // Check bullet point typography
    const bulletPoint = page
      .locator('li span:has-text("Expert Faculty Collaboration")')
      .first();
    await expect(bulletPoint).toBeVisible();

    const bulletStyles = await bulletPoint.locator('..').evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return {
        fontSize: styles.fontSize,
        lineHeight: styles.lineHeight,
        fontWeight: styles.fontWeight,
      };
    });

    // Check if font size is 24px (at large breakpoint) or responsive size
    expect(parseFloat(bulletStyles.fontSize)).toBeGreaterThanOrEqual(18);

    // Check line height is 140% for body text
    const bulletLineHeightRatio =
      parseFloat(bulletStyles.lineHeight) / parseFloat(bulletStyles.fontSize);
    expect(bulletLineHeightRatio).toBeCloseTo(1.4, 0.1);

    // Check font weight is normal (400)
    expect(bulletStyles.fontWeight).toBe('400');
  });

  test('WhyJoinCarousel has correct typography', async ({ page }) => {
    await page.goto('/website/join');

    // Wait for carousel to be visible
    await page.waitForSelector('h3:has-text("Real world impact")', {
      timeout: 10000,
    });

    // Check title typography
    const title = page.locator('h3:has-text("Real world impact")').first();
    await expect(title).toBeVisible();

    const titleStyles = await title.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return {
        fontSize: styles.fontSize,
        lineHeight: styles.lineHeight,
        fontWeight: styles.fontWeight,
      };
    });

    // Check if font size is responsive (28-40px)
    expect(parseFloat(titleStyles.fontSize)).toBeGreaterThanOrEqual(28);

    // Check line height is 120% for titles
    const lineHeightRatio =
      parseFloat(titleStyles.lineHeight) / parseFloat(titleStyles.fontSize);
    expect(lineHeightRatio).toBeCloseTo(1.2, 0.1);

    // Check font weight is normal (400)
    expect(titleStyles.fontWeight).toBe('400');

    // Check description typography
    const description = page
      .locator('p:has-text("you won\'t just be tinkering")')
      .first();
    await expect(description).toBeVisible();

    const descriptionStyles = await description.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return {
        fontSize: styles.fontSize,
        lineHeight: styles.lineHeight,
        fontWeight: styles.fontWeight,
      };
    });

    // Check if font size is responsive (18-24px)
    expect(parseFloat(descriptionStyles.fontSize)).toBeGreaterThanOrEqual(18);

    // Check line height is 140% for body text
    const descLineHeightRatio =
      parseFloat(descriptionStyles.lineHeight) /
      parseFloat(descriptionStyles.fontSize);
    expect(descLineHeightRatio).toBeCloseTo(1.4, 0.1);

    // Check font weight is normal (400)
    expect(descriptionStyles.fontWeight).toBe('400');
  });

  test('Carousel text fits well in cards', async ({ page }) => {
    await page.goto('/website/');

    // Wait for carousel
    await page.waitForSelector(
      'h3:has-text("Leveraging UCSD\'s Unique Assets")',
      { timeout: 10000 }
    );

    // Take a screenshot for visual verification
    await page.screenshot({
      path: 'e2e/screenshots/achieve-carousel.png',
      fullPage: false,
    });

    // Check that text doesn't overflow the card
    const card = page
      .locator('div')
      .filter({
        has: page.locator('h3:has-text("Leveraging UCSD\'s Unique Assets")'),
      })
      .first();
    const cardBox = await card.boundingBox();
    const title = page
      .locator('h3:has-text("Leveraging UCSD\'s Unique Assets")')
      .first();
    const titleBox = await title.boundingBox();

    if (cardBox && titleBox) {
      // Title should be contained within the card
      expect(titleBox.x).toBeGreaterThanOrEqual(cardBox.x);
      expect(titleBox.x + titleBox.width).toBeLessThanOrEqual(
        cardBox.x + cardBox.width
      );
    }

    // Test Why Join carousel
    await page.goto('/website/join');
    await page.waitForSelector('h3:has-text("Real world impact")', {
      timeout: 10000,
    });

    await page.screenshot({
      path: 'e2e/screenshots/why-join-carousel.png',
      fullPage: false,
    });
  });
});
