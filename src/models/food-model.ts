import { FoodHelper } from '../helpers/food-model-helper'
export class Food {
  constructor (private readonly foodHelper: FoodHelper) {}

  getName (): string {
    return this.foodHelper.name
  }

  getDescription (): string {
    return this.foodHelper.description
  }

  getPrice (): number {
    return this.foodHelper.price
  }
}
