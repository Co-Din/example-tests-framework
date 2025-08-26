import type {
  Fixtures,
  PlaywrightTestArgs,
  PlaywrightTestOptions,
  PlaywrightWorkerArgs,
  PlaywrightWorkerOptions,
  TestType
} from '@playwright/test';

import type {
  BddTestFixtures,
  BddWorkerFixtures,
  createBdd,
  PlaywrightStyleStepCtor,
  PlaywrightStyleStepFn
} from 'playwright-bdd';

import type FrameworkLocators from './fixtures/playwrightBDDDocsPage/frameworkLocators.js';

export interface FrameworkTestFixtures {
    frameworkLocators: FrameworkLocators;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type -- empty marker interface for worker fixtures
export interface FrameworkWorkerFixtures {
}

type PlaywrightTestFixtures = PlaywrightTestArgs & PlaywrightTestOptions;
type PlaywrightBddTestFixtures = PlaywrightTestFixtures & BddTestFixtures;
type PackTestFixtures<TestFixtures extends FrameworkTestFixtures> = TestFixtures & PlaywrightBddTestFixtures;
type PlaywrightWorkerFixtures = PlaywrightWorkerArgs & PlaywrightWorkerOptions;
type PlaywrightBddWorkerFixtures = PlaywrightWorkerFixtures & BddWorkerFixtures;
type PackWorkerFixtures<WorkerFixtures extends FrameworkWorkerFixtures> =  WorkerFixtures & PlaywrightBddWorkerFixtures;
type CreateBddInferred<TestFixtures extends FrameworkTestFixtures, WorkerFixtures extends FrameworkWorkerFixtures> = ReturnType<typeof createBdd<PackTestFixtures<TestFixtures>, PackWorkerFixtures<WorkerFixtures>, ''>>;
type StepCtor<TestFixtures extends FrameworkTestFixtures, WorkerFixtures extends FrameworkWorkerFixtures, CombinedTestFixtures extends PackTestFixtures<TestFixtures> = PackTestFixtures<TestFixtures>, CombinedWorkerFixtures extends PackWorkerFixtures<WorkerFixtures> = PackWorkerFixtures<WorkerFixtures>> = PlaywrightStyleStepCtor<PlaywrightStyleStepFn<CombinedTestFixtures, CombinedWorkerFixtures>>;

/**
 * TODO this is "extra" type hinting because of difficulties using the type inferred from the createBdd return type.
 *   These types match the StepFn/StepCtor types defined in createBdd:
 *   https://github.com/vitalets/playwright-bdd/blob/main/src/steps/createBdd.ts#L59-L67
 */
interface CreateBddSteps<TestFixtures extends FrameworkTestFixtures, WorkerFixtures extends FrameworkWorkerFixtures, CombinedTestFixtures extends PackTestFixtures<TestFixtures> = PackTestFixtures<TestFixtures>, CombinedWorkerFixtures extends PackWorkerFixtures<WorkerFixtures> = PackWorkerFixtures<WorkerFixtures>> {
  Given: StepCtor<CombinedTestFixtures, CombinedWorkerFixtures>;
  When: StepCtor<CombinedTestFixtures, CombinedWorkerFixtures>;
  Then: StepCtor<CombinedTestFixtures, CombinedWorkerFixtures>;
  Step: StepCtor<CombinedTestFixtures, CombinedWorkerFixtures>;
}

export type PackFixtures<TestFixtures extends FrameworkTestFixtures, WorkerFixtures extends FrameworkWorkerFixtures> = Fixtures<TestFixtures, WorkerFixtures, PlaywrightBddTestFixtures, PlaywrightBddWorkerFixtures>
export type Bdd<TestFixtures extends FrameworkTestFixtures, WorkerFixtures extends FrameworkWorkerFixtures> = CreateBddInferred<TestFixtures, WorkerFixtures> & CreateBddSteps<TestFixtures, WorkerFixtures>;

export interface TestPack<TestFixtures extends FrameworkTestFixtures, WorkerFixtures extends FrameworkWorkerFixtures> {
  test: TestType<PackTestFixtures<TestFixtures>, PackWorkerFixtures<WorkerFixtures>>;
  bdd: Bdd<TestFixtures, WorkerFixtures>;
}
