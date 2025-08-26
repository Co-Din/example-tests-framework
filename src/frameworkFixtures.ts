import { expect } from '@playwright/test';
import { createBdd, test as bddTest } from 'playwright-bdd';
import type { Bdd, FrameworkTestFixtures, FrameworkWorkerFixtures, PackFixtures, TestPack } from './frameworkTypes.js';
import defineFrameworkSteps from './frameworkSteps.js';
import FrameworkLocators from './fixtures/playwrightBDDDocsPage/frameworkLocators.js';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type -- optional worker fixtures
export function defineTestPack<T extends FrameworkTestFixtures, W extends FrameworkWorkerFixtures = {}>(pack: PackFixtures<T, W>): TestPack<T, W> {
  const test = bddTest.extend<T, W>({
    ...pack,
      frameworkLocators: async ({ page }, use) => {
      await use(new FrameworkLocators(page))
    }
  });

  const bdd = createBdd(test) as Bdd<T, W>;

  defineFrameworkSteps(bdd, expect);

  return { test, bdd};
}
