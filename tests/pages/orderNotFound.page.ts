import { BasePage } from './base-page'
import { Locator, Page } from '@playwright/test'

export class OrderNotFoundPage extends BasePage {
  readonly orderNotFoundContainer: Locator

  constructor(page: Page) {
    super(page)
    this.orderNotFoundContainer = page.getByTestId('orderNotFound-container')
  }
}
