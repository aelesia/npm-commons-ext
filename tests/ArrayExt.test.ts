import { extend } from '../index'

extend.all()

describe('Array', () => {
  test('first', async () => {
    let arr = ['a', 'b', 'c']
    expect(arr.first()).toEqual('a')
  })

  test('last', async () => {
    let arr = ['a', 'b', 'c']
    expect(arr.last()).toEqual('c')
  })

  test('is_not_empty', async () => {
    let arr = ['a', 'b', 'c']
    expect(arr.isEmpty()).toEqual(false)
  })

  test('is_empty', async () => {
    let arr: [] = []
    expect(arr.isEmpty()).toEqual(true)
  })

  test('max', async () => {
    let arr = [33, 64, -23]
    expect(arr.max()).toEqual(64)
  })

  test('random', async () => {
    let arr = ['a', 'b', 'c']
    expect(arr.includes(arr.random())).toBeTruthy()
  })
})
