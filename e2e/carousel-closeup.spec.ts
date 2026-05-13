import { expect, test } from '@playwright/test';

test.describe('Carousel Close-up Screenshots', () => {
  test('Take close-up screenshots of carousel cards', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });

    await page.goto('/');

    const achieveDesktop = page.getByTestId('achieve-carousel-desktop');
    const achieveHeading = page.getByRole('heading', {
      level: 2,
      name: 'How We Aim to Achieve Our Mission',
    });
    const firstAchieveTitle = achieveDesktop.getByRole('heading', {
      level: 3,
      name: "Leveraging UCSD's Unique Assets",
    });
    const firstAchieveSlide = achieveDesktop.getByTestId('achieve-slide-1');

    await achieveHeading.scrollIntoViewIfNeeded();
    await expect(firstAchieveTitle).toBeVisible();

    await firstAchieveSlide.screenshot({
      path: 'e2e/screenshots/achieve-card-closeup.png',
    });

    await page.goto('/join');
    const joinCarousel = page.getByTestId('why-join-carousel');
    const joinHeading = joinCarousel.getByRole('heading', {
      level: 2,
      name: 'Why join Triton Droids?',
    });
    const firstJoinTitle = joinCarousel.getByRole('heading', {
      level: 3,
      name: 'Real world impact',
    });
    const firstJoinSlide = joinCarousel.getByTestId('why-join-slide-1');

    await joinHeading.scrollIntoViewIfNeeded();
    await expect(firstJoinTitle).toBeVisible();
    await firstJoinSlide.screenshot({
      path: 'e2e/screenshots/join-card-closeup.png',
    });

    await page.goto('/');

    const nextButton = achieveDesktop.getByRole('button', {
      name: 'Next slide',
    });
    const secondSlideTitle = achieveDesktop.getByRole('heading', {
      level: 3,
      name: 'Focus on Equity and Global Impact',
    });
    const secondSlide = achieveDesktop.getByTestId('achieve-slide-2');

    await achieveHeading.scrollIntoViewIfNeeded();
    await expect(firstAchieveTitle).toBeVisible();
    await nextButton.click();
    await expect(secondSlideTitle).toBeVisible();

    await secondSlide.screenshot({
      path: 'e2e/screenshots/achieve-card-slide2.png',
    });
  });
});
