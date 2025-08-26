import type { expect as Expect } from '@playwright/test';
import type { Bdd, FrameworkTestFixtures, FrameworkWorkerFixtures } from './frameworkTypes.js';
import defineSteps from './steps/steps.js';

/**
 * The intention to create one function per framework step file.
 */
export default function defineFrameworkSteps<T extends FrameworkTestFixtures, W extends FrameworkWorkerFixtures>(bdd: Bdd<T, W>, expect: typeof Expect) {
  defineSteps(bdd, expect);
}
