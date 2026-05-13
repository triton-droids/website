import { expect, test, type Locator, type Page } from '@playwright/test';

async function getAchieveCarousel(page: Page) {
  const desktopCarousel = page.getByTestId('achieve-carousel-desktop');
  if (await desktopCarousel.isVisible()) {
    return { carousel: desktopCarousel, isDesktop: true };
  }

  return {
    carousel: page.getByTestId('achieve-carousel-mobile'),
    isDesktop: false,
  };
}

function getAchieveTitleLocator(
  carousel: Locator,
  title: string,
  isDesktop: boolean
) {
  return isDesktop
    ? carousel.getByRole('heading', { level: 3, name: title })
    : carousel.getByText(title, { exact: true }).first();
}

test.describe('Carousel Visual Testing', () => {
  const achieveTitle = "Leveraging UCSD's Unique Assets";

  test('AchieveSection carousel visual test', async ({ page }) => {
    await page.goto('/');

    const { carousel: achieveCarousel, isDesktop } =
      await getAchieveCarousel(page);
    const sectionHeading = page.getByRole('heading', {
      level: 2,
      name: 'How We Aim to Achieve Our Mission',
    });
    const firstSlideTitle = getAchieveTitleLocator(
      achieveCarousel,
      achieveTitle,
      isDesktop
    );

    await sectionHeading.scrollIntoViewIfNeeded();
    await expect(firstSlideTitle).toBeVisible();

    await achieveCarousel.screenshot({
      path: 'e2e/screenshots/achieve-carousel-full.png',
    });
  });

  test('WhyJoinCarousel visual test', async ({ page }) => {
    await page.goto('/join');

    const joinCarousel = page.getByTestId('why-join-carousel');
    const sectionHeading = joinCarousel.getByRole('heading', {
      level: 2,
      name: 'Why join Triton Droids?',
    });
    const firstSlideTitle = joinCarousel.getByRole('heading', {
      level: 3,
      name: 'Real world impact',
    });

    await sectionHeading.scrollIntoViewIfNeeded();
    await expect(firstSlideTitle).toBeVisible();

    await joinCarousel.getByTestId('why-join-slide-1').screenshot({
      path: 'e2e/screenshots/why-join-carousel-full.png',
    });
  });

  test('Carousel typography at different viewport sizes', async ({ page }) => {
    const viewports = [
      { width: 1920, height: 1080, screenshot: 'achieve-carousel-desktop.png' },
      { width: 768, height: 1024, screenshot: 'achieve-carousel-tablet.png' },
    ];

    for (const viewport of viewports) {
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      });
      await page.goto('/');

      const { carousel: achieveCarousel } = await getAchieveCarousel(page);
      const sectionHeading = page.getByRole('heading', {
        level: 2,
        name: 'How We Aim to Achieve Our Mission',
      });
      const firstSlideTitle = achieveCarousel.getByRole('heading', {
        level: 3,
        name: achieveTitle,
      });

      await sectionHeading.scrollIntoViewIfNeeded();
      await expect(firstSlideTitle).toBeVisible();

      await achieveCarousel.screenshot({
        path: `e2e/screenshots/${viewport.screenshot}`,
      });
    }
  });
});
