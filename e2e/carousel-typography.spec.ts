import { test, expect } from '@playwright/test';

test.describe('Carousel Typography', () => {
  test('AchieveSection carousel has correct typography', async ({ page }) => {
    await page.goto('/');

    const desktopAchieve = page.getByTestId('achieve-carousel-desktop');
    const title = desktopAchieve.getByRole('heading', {
      level: 3,
      name: "Leveraging UCSD's Unique Assets",
    });

    await expect(title).toBeVisible();

    // Check title typography
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
    const bulletPoint = desktopAchieve.getByText(
      'Expert Faculty Collaboration'
    );
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
    await page.goto('/join');

    const joinCarousel = page.getByTestId('why-join-carousel');
    const title = joinCarousel.getByRole('heading', {
      level: 3,
      name: 'Real world impact',
    });

    // Check title typography
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
    const firstJoinSlide = joinCarousel.getByTestId('why-join-slide-1');
    const descriptionToggle = firstJoinSlide.getByRole('button', {
      name: 'Show description',
    });
    await expect(descriptionToggle).toBeVisible();
    await descriptionToggle.click();

    const description = firstJoinSlide.getByText("you won't just be tinkering");
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
    await page.goto('/');

    const desktopAchieve = page.getByTestId('achieve-carousel-desktop');
    const slideOne = desktopAchieve.getByTestId('achieve-slide-1');
    const slideTwo = desktopAchieve.getByTestId('achieve-slide-2');
    const nextButton = desktopAchieve.getByRole('button', {
      name: 'Next slide',
    });

    // Wait for desktop carousel
    const firstSlideTitle = desktopAchieve.getByRole('heading', {
      level: 3,
      name: "Leveraging UCSD's Unique Assets",
    });
    await expect(firstSlideTitle).toBeVisible();

    // Take a screenshot for visual verification
    await page.screenshot({
      path: 'e2e/screenshots/achieve-carousel.png',
      fullPage: false,
    });

    // Check that text doesn't overflow the card
    const cardBox = await slideOne.boundingBox();
    const titleBox = await firstSlideTitle.boundingBox();

    if (cardBox && titleBox) {
      // Title should be contained within the card
      expect(titleBox.x).toBeGreaterThanOrEqual(cardBox.x);
      expect(titleBox.x + titleBox.width).toBeLessThanOrEqual(
        cardBox.x + cardBox.width
      );
    }

    // Assert navigation actually changes visible content
    await nextButton.click();
    const secondSlideTitle = desktopAchieve.getByRole('heading', {
      level: 3,
      name: 'Focus on Equity and Global Impact',
    });
    await expect(secondSlideTitle).toBeVisible();
    await expect(slideTwo).toBeVisible();

    // Test Why Join carousel
    await page.goto('/join');
    const joinCarousel = page.getByTestId('why-join-carousel');
    const joinTitle = joinCarousel.getByRole('heading', {
      level: 3,
      name: 'Real world impact',
    });
    await expect(joinTitle).toBeVisible();

    const joinNextButton = joinCarousel.getByRole('button', {
      name: 'Next slide',
    });
    await joinNextButton.click();
    await expect(
      joinCarousel.getByRole('heading', {
        level: 3,
        name: 'Hands-on experience',
      })
    ).toBeVisible();

    await page.screenshot({
      path: 'e2e/screenshots/why-join-carousel.png',
      fullPage: false,
    });
  });
});
