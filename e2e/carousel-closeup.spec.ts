import { test } from '@playwright/test';

test.describe('Carousel Close-up Screenshots', () => {
  test('Take close-up screenshots of carousel cards', async ({ page }) => {
    // Set viewport to desktop size for best typography view
    await page.setViewportSize({ width: 1920, height: 1080 });

    // AchieveSection carousel
    await page.goto('/website/');
    await page.locator('h2:has-text("How We Aim to Achieve Our Mission")').scrollIntoViewIfNeeded();
    await page.waitForSelector('h3:has-text("Leveraging UCSD\'s Unique Assets")', { timeout: 10000 });
    await page.waitForTimeout(1000);

    // Get the actual card element (the dark container with content)
    const achieveCard = page.locator('div[class*="bg-[#2A2B2D]"]').filter({
      has: page.locator('h3:has-text("Leveraging UCSD\'s Unique Assets")')
    }).first();

    await achieveCard.screenshot({
      path: 'e2e/screenshots/achieve-card-closeup.png',
    });

    console.log('AchieveSection card close-up saved');

    // WhyJoinCarousel
    await page.goto('/website/join');
    await page.locator('h2:has-text("Why join Triton Droids?")').scrollIntoViewIfNeeded();
    await page.waitForSelector('h3:has-text("Real world impact")', { timeout: 10000 });
    await page.waitForTimeout(1000);

    const joinCard = page.locator('div[class*="bg-[#2A2B2D]"]').filter({
      has: page.locator('h3:has-text("Real world impact")')
    }).first();

    await joinCard.screenshot({
      path: 'e2e/screenshots/join-card-closeup.png',
    });

    console.log('WhyJoinCarousel card close-up saved');

    // Test clicking next button to see another slide
    await page.goto('/website/');
    await page.locator('h2:has-text("How We Aim to Achieve Our Mission")').scrollIntoViewIfNeeded();
    await page.waitForSelector('h3:has-text("Leveraging UCSD\'s Unique Assets")', { timeout: 10000 });
    await page.waitForTimeout(1000);

    // Click the next arrow
    const nextButton = page.locator('button[aria-label="Next slide"]').first();
    await nextButton.click();
    await page.waitForTimeout(1000);

    // Screenshot the second slide
    const secondSlideCard = page.locator('div[class*="bg-[#2A2B2D]"]').filter({
      has: page.locator('h3:has-text("Focus on Equity")')
    }).first();

    await secondSlideCard.screenshot({
      path: 'e2e/screenshots/achieve-card-slide2.png',
    });

    console.log('Second slide screenshot saved');
  });
});
