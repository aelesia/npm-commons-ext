import { extend } from '../index'
import { TimeUtil } from '@aelesia/commons/dist/src/collections/util/TimeUtil'

extend.all()

describe('String', () => {
  describe('isNum', () => {
    test('Valid Number', async () => {
      expect('1'.isNum()).toBeTruthy()
      expect('0.1'.isNum()).toBeTruthy()
      expect('0'.isNum()).toBeTruthy()
      expect('-1'.isNum()).toBeTruthy()
      expect('-0.1'.isNum()).toBeTruthy()
      expect('1 '.isNum()).toBeTruthy()
      expect(' 1'.isNum()).toBeTruthy()
      expect(' 1 '.isNum()).toBeTruthy()
    })
    test('Invalid Number', async () => {
      expect('192.168.1.1'.isNum()).toBeFalsy()
      expect(''.isNum()).toBeFalsy()
      expect('1a'.isNum()).toBeFalsy()
      expect('a1'.isNum()).toBeFalsy()
    })
  })

  describe('isBlank', () => {
    test('Blank', async () => {
      expect(''.isBlank()).toBeTruthy()
      expect(' '.isBlank()).toBeTruthy()
      expect('  '.isBlank()).toBeTruthy()
    })
    test('Not blank', async () => {
      expect('a'.isBlank()).toBeFalsy()
      expect(' a'.isBlank()).toBeFalsy()
      expect('a '.isBlank()).toBeFalsy()
    })
  })

  test('replace_all', () => {
    expect('the quick brown fox jumps over the lazy wolf'.replaceAll('the', '那个')).toEqual(
      '那个 quick brown fox jumps over 那个 lazy wolf'
    )
  })

  describe('remove', () => {
    test('remove 3 words', () => {
      expect(
        'the quick brown fox jumps over the lazy wolf'.remove(['quick', 'brown', 'lazy'])
      ).toEqual('the   fox jumps over the  wolf')
    })
  })

  test('to_num', () => {
    expect('1'._num()).toEqual(1)
    expect('-1'._num()).toEqual(-1)
    expect('1.1'._num()).toEqual(1.1)
  })

  test('secs', () => {
    expect('1'.secs()).toEqual(TimeUtil.ONE_SECOND)
  })
  test('mins', () => {
    expect('1'.mins()).toEqual(TimeUtil.ONE_MINUTE)
  })
  test('hours', () => {
    expect('1'.hours()).toEqual(TimeUtil.ONE_HOUR)
  })
  test('days', () => {
    expect('1'.days()).toEqual(TimeUtil.ONE_DAY)
  })

  test('0%', () => {
    for (let i = 0; i < 1000; i++) {
      expect('0%'.chance()).toBeFalsy()
    }
  })
  test('100%', () => {
    for (let i = 0; i < 1000; i++) {
      expect('100%'.chance()).toBeTruthy()
    }
  })
})
