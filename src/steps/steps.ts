import type { expect as Expect } from '@playwright/test';
import type { Bdd, FrameworkTestFixtures, FrameworkWorkerFixtures } from '../frameworkTypes.js';

export default function defineSteps<T extends FrameworkTestFixtures, W extends FrameworkWorkerFixtures>({ Given, When, Then }: Bdd<T, W>, expect: typeof Expect) {  
  Given('I navigate to the {string} page', async ({ page }, pageName) => {
    switch (pageName) {
      case 'Playwright-BDD documentation':
        await page.goto('https://vitalets.github.io/playwright-bdd/#/');
      break;
      default:
        console.log('The page you\'re looking for doesn\'t exist, please try another page.');
      break;
    }
  });

  Then('I have landed at the following page with the URL {string}', async ({ page }, expectedUrl: string) => {
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(expectedUrl);
  });

  When('I press the {string} key', async ({ page }, key) => {
    await page.keyboard.press(key);
  });

  Then('I see the Playwright-BDD search box', async ({ frameworkLocators }) => {
    await expect(frameworkLocators.playwrightBddSearchBox()).toBeVisible();
  });

  When('I enter the search term {string} in the Playwright-BDD search box', async ({ frameworkLocators }, searchTerm: string) => {
    await frameworkLocators.playwrightBddSearchBox().scrollIntoViewIfNeeded();
    await frameworkLocators.playwrightBddSearchBox().click();
    await frameworkLocators.playwrightBddSearchBox().fill(searchTerm);
  });
}
