import { expect, test } from '@playwright/test';

test.describe('Join Carousel All Slides', () => {
  test('Capture all 4 slides and assert navigation works', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/join');

    const joinCarousel = page.getByTestId('why-join-carousel');
    const sectionHeading = joinCarousel.getByRole('heading', {
      level: 2,
      name: 'Why join Triton Droids?',
    });
    const nextButton = joinCarousel.getByRole('button', { name: 'Next slide' });
    const slideTitles = [
      'Real world impact',
      'Hands-on experience',
      'Jobs, internships, and more',
      'Life long connections',
    ];
    const slideScreenshots = [
      'join-slide-1-real-world-impact.png',
      'join-slide-2-hands-on.png',
      'join-slide-3-jobs.png',
      'join-slide-4-connections.png',
    ];

    await sectionHeading.scrollIntoViewIfNeeded();

    for (let index = 0; index < slideTitles.length; index += 1) {
      const title = joinCarousel.getByRole('heading', {
        level: 3,
        name: slideTitles[index],
      });
      const activeSlide = joinCarousel.getByTestId(
        `why-join-slide-${index + 1}`
      );

      await expect(title).toBeVisible();
      await activeSlide.screenshot({
        path: `e2e/screenshots/${slideScreenshots[index]}`,
      });

      if (index < slideTitles.length - 1) {
        await nextButton.click();
      }
    }
  });
});
