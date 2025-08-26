import type { Page } from '@playwright/test';

export default class FrameworkLocators {
  constructor(private page: Page) {
  }

  playwrightBddSearchBox() {
    return this.page.getByRole('searchbox', { name: 'Search text' });
  }
}
