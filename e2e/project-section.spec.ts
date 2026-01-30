import { test } from '@playwright/test';

test.describe('Project Section', () => {
  test('Capture project section with correct arrow direction', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });

    await page.goto('/website/');

    // Scroll to the project section
    await page
      .locator('h2:has-text("A Vision Set in Motion")')
      .scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);

    // Take screenshot of the entire project section
    const projectSection = page.locator('section#projects').first();
    await projectSection.screenshot({
      path: 'e2e/screenshots/project-section-full.png',
    });

    // Take close-up of the "Learn More" link with arrow
    const learnMoreLink = page.locator('a:has-text("Learn More")').first();
    await learnMoreLink.screenshot({
      path: 'e2e/screenshots/learn-more-arrow.png',
    });

    console.log('Project section screenshots captured');
  });
});
