import { test } from '@playwright/test';

test.describe('Carousel Visual Testing', () => {
  test('AchieveSection carousel visual test', async ({ page }) => {
    await page.goto('/website/');

    // Scroll to the carousel section
    await page
      .locator('h2:has-text("How We Aim to Achieve Our Mission")')
      .scrollIntoViewIfNeeded();

    // Wait for carousel to be visible
    await page.waitForSelector(
      'h3:has-text("Leveraging UCSD\'s Unique Assets")',
      { timeout: 10000 }
    );
    await page.waitForTimeout(1000); // Wait for animations

    // Take screenshot of the carousel
    const carousel = page
      .locator('div')
      .filter({
        has: page.locator('h3:has-text("Leveraging UCSD\'s Unique Assets")'),
      })
      .first();
    await carousel.screenshot({
      path: 'e2e/screenshots/achieve-carousel-full.png',
    });

    console.log('AchieveSection carousel screenshot saved');
  });

  test('WhyJoinCarousel visual test', async ({ page }) => {
    await page.goto('/website/join');

    // Scroll to the carousel section
    await page
      .locator('h2:has-text("Why join Triton Droids?")')
      .scrollIntoViewIfNeeded();

    // Wait for carousel to be visible
    await page.waitForSelector('h3:has-text("Real world impact")', {
      timeout: 10000,
    });
    await page.waitForTimeout(1000); // Wait for animations

    // Take screenshot of the carousel
    const carousel = page
      .locator('div')
      .filter({ has: page.locator('h3:has-text("Real world impact")') })
      .first();
    await carousel.screenshot({
      path: 'e2e/screenshots/why-join-carousel-full.png',
    });

    console.log('WhyJoinCarousel screenshot saved');
  });

  test('Carousel typography at different viewport sizes', async ({ page }) => {
    // Test at desktop size (1920x1080)
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/website/');

    await page
      .locator('h2:has-text("How We Aim to Achieve Our Mission")')
      .scrollIntoViewIfNeeded();
    await page.waitForSelector(
      'h3:has-text("Leveraging UCSD\'s Unique Assets")',
      { timeout: 10000 }
    );
    await page.waitForTimeout(1000);

    const carousel = page
      .locator('div')
      .filter({
        has: page.locator('h3:has-text("Leveraging UCSD\'s Unique Assets")'),
      })
      .first();
    await carousel.screenshot({
      path: 'e2e/screenshots/achieve-carousel-desktop.png',
    });

    // Test at tablet size (768x1024)
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/website/');

    await page
      .locator('h2:has-text("How We Aim to Achieve Our Mission")')
      .scrollIntoViewIfNeeded();
    await page.waitForSelector(
      'h3:has-text("Leveraging UCSD\'s Unique Assets")',
      { timeout: 10000 }
    );
    await page.waitForTimeout(1000);

    const carouselTablet = page
      .locator('div')
      .filter({
        has: page.locator('h3:has-text("Leveraging UCSD\'s Unique Assets")'),
      })
      .first();
    await carouselTablet.screenshot({
      path: 'e2e/screenshots/achieve-carousel-tablet.png',
    });

    console.log('Responsive screenshots saved');
  });
});
