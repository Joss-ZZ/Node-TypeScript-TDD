import { Food } from '../models/food-model'

describe('Classes', () => {
  it('Class FoodModel', () => {
    const food = new Food({
      name: 'Prueba',
      description: 'Esto es una prueba',
      price: 2020,
      inventory: 50
    })
    expect(food.getFood()).toEqual(food)
    expect(food.getName()).toEqual('Prueba')
    expect(food.getDescription()).toEqual('Esto es una prueba')
    expect(food.getPrice()).toBe(2020)
    expect(food.getInventory()).toBe(50)
  })
})
