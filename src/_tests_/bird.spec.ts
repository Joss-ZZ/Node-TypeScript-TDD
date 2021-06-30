import { Bird, Eagle, Penguin } from '../models/bird-model'

describe('Bird', () => {
  test('Should Fly', () => {
    const bird = new Bird({
      name: 'Bird',
      age: 30,
      origen: 'North America'
    })
    expect(bird.fly()).toEqual('Bird')
  })

  test('Should Fly', () => {
    const eagle = new Eagle({
      name: 'Eagle',
      age: 30,
      origen: 'North America'
    })
    expect(eagle.fly()).toEqual('Eagle')
  })

  test('Shouldnt fly Penguin', () => {
    const penguin = new Penguin({
      name: 'Eagle',
      age: 30,
      origen: 'North America'
    })
    expect(penguin.fly()).toEqual(new Error('No puede volar'))
  })

  test('Should walk and swim Penguin', () => {
    const penguin = new Penguin({
      name: 'Eagle',
      age: 30,
      origen: 'North America'
    })
    expect(penguin.walk()).toEqual('Puedo caminar')
    expect(penguin.swim()).toEqual('Puedo nadar')
  })
})
