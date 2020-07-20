import { extend } from '../index'
import { _ } from '@aelesia/commons'

extend()

describe('Time', () => {
  test('utc/epoch', async () => {
    let date = new Date(1576598796987)
    expect(date.utc()).toEqual(1576598796987)
    expect(date.epoch()).toEqual(1576598796)
  })

  test('add/elapsed', async () => {
    let today = new Date()
    let tomorrow = today.add('1'.days())
    let yesterday = today.minus('1'.days())
    expect(tomorrow.elapsed(yesterday)).toEqual(_.time.days(2))
    expect(today.elapsed(yesterday)).toEqual(_.time.days(1))
    expect(today.elapsed(today)).toEqual(0)
    expect(today.elapsed(tomorrow)).toEqual(_.time.days(-1))
    expect(yesterday.elapsed(tomorrow)).toEqual(_.time.days(-2))
  })

  test('until', async () => {
    let today = new Date()
    let tomorrow = today.add('1'.days())
    let yesterday = today.minus('1'.days())
    expect(tomorrow.timeUntil()).toBeCloseTo('1'.days(), -1)
    expect(today.timeUntil()).toBeCloseTo('0'.days(), -1)
    expect(yesterday.timeUntil()).toBeCloseTo('-1'.days(), -1)
  })

  test('since', async () => {
    let today = new Date()
    let tomorrow = today.add('1'.days())
    let yesterday = today.minus('1'.days())
    expect(tomorrow.timeSince()).toBeCloseTo('-1'.days(), -1)
    expect(today.timeSince()).toBeCloseTo('0'.days(), -1)
    expect(yesterday.timeSince()).toBeCloseTo('1'.days(), -1)
  })

  test('before', async () => {
    let date = new Date()
    let date2 = date.add('1'.days())
    expect(date.isBefore(date)).toBeTruthy()
    expect(date.isBefore(date2)).toBeTruthy()
    expect(date2.isBefore(date)).toBeFalsy()
  })

  test('after', async () => {
    let date = new Date()
    let date2 = date.add('1'.days())
    expect(date.isAfter(date)).toBeFalsy()
    expect(date.isAfter(date2)).toBeFalsy()
    expect(date2.isAfter(date)).toBeTruthy()
  })

  test('isPast', async () => {
    let date = new Date()
    let pastDate = date.minus('1'.days())
    let futureDate = date.add('1'.days())
    expect(pastDate.isPast()).toBeTruthy()
    expect(futureDate.isPast()).toBeFalsy()
  })

  test('isFuture', async () => {
    let date = new Date()
    let pastDate = date.minus('1'.days())
    let futureDate = date.add('1'.days())
    expect(pastDate.isFuture()).toBeFalsy()
    expect(futureDate.isFuture()).toBeTruthy()
  })
})
