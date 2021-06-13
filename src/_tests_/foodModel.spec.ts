import { Food } from '../models/food-model'

describe('Classes', () => {
  it('Class FoodModel', () => {
    const food = new Food('Prueba', 'Esto es una prueba', 2020)
    expect(food.getName()).toEqual('Prueba')
    expect(food.getDescription()).toEqual('Esto es una prueba')
    expect(food.getPrice()).toBe(2020)
  })
})
