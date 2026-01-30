import { test } from '@playwright/test';

test.describe('Join Carousel All Slides', () => {
  test('Capture all 4 slides of Join carousel with highlighting', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });

    await page.goto('/website/join');
    await page
      .locator('h2:has-text("Why join Triton Droids?")')
      .scrollIntoViewIfNeeded();
    await page.waitForSelector('h3:has-text("Real world impact")', {
      timeout: 10000,
    });
    await page.waitForTimeout(1000);

    // Slide 1: Real world impact
    let card = page
      .locator('div[class*="bg-[#2A2B2D]"]')
      .filter({
        has: page.locator('h3:has-text("Real world impact")'),
      })
      .first();
    await card.screenshot({
      path: 'e2e/screenshots/join-slide-1-real-world-impact.png',
    });
    console.log('Slide 1 captured');

    // Click next for Slide 2
    let nextButton = page.locator('button[aria-label="Next slide"]').first();
    await nextButton.click();
    await page.waitForTimeout(1500);

    // Slide 2: Hands-on experience
    card = page
      .locator('div[class*="bg-[#2A2B2D]"]')
      .filter({
        has: page.locator('h3:has-text("Hands-on experience")'),
      })
      .first();
    await card.screenshot({
      path: 'e2e/screenshots/join-slide-2-hands-on.png',
    });
    console.log('Slide 2 captured');

    // Click next for Slide 3
    nextButton = page.locator('button[aria-label="Next slide"]').first();
    await nextButton.click();
    await page.waitForTimeout(1500);

    // Slide 3: Jobs, internships, and more
    card = page
      .locator('div[class*="bg-[#2A2B2D]"]')
      .filter({
        has: page.locator('h3:has-text("Jobs, internships")'),
      })
      .first();
    await card.screenshot({ path: 'e2e/screenshots/join-slide-3-jobs.png' });
    console.log('Slide 3 captured');

    // Click next for Slide 4
    nextButton = page.locator('button[aria-label="Next slide"]').first();
    await nextButton.click();
    await page.waitForTimeout(1500);

    // Slide 4: Life long connections
    card = page
      .locator('div[class*="bg-[#2A2B2D]"]')
      .filter({
        has: page.locator('h3:has-text("Life long connections")'),
      })
      .first();
    await card.screenshot({
      path: 'e2e/screenshots/join-slide-4-connections.png',
    });
    console.log('Slide 4 captured');

    console.log('All 4 Join carousel slides captured with highlighting!');
  });
});
