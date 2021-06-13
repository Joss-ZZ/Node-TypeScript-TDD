import { VehicleHelper } from '../helpers/vehicle-model-helper'
export class VehicleModel {
  constructor (private readonly vehicleHelper: VehicleHelper) {}

  getName (): string {
    return this.vehicleHelper.name
  }

  getModel (): string {
    return this.vehicleHelper.model
  }

  getYear (): number {
    return this.vehicleHelper.year
  }

  getPrice (): number {
    return this.vehicleHelper.price
  }

  getInventory (): boolean {
    return this.vehicleHelper.inventory
  }
}
