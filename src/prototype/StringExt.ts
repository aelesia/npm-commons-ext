import { StringUtil } from '@aelesia/commons/dist/src/collections/util/StringUtil'
import { TimeUtil } from '@aelesia/commons/dist/src/collections/util/TimeUtil'
import { RandomUtil } from '@aelesia/commons/dist/src/collections/util/RandomUtil'

declare global {
  interface String {
    isNum(): boolean
    isBlank(): boolean
    replaceAll(search: string, replacement: string): string
    remove(char: string | string[]): string
    _num(): number
    _json<T>(): T
    secs(): number
    mins(): number
    hours(): number
    days(): number
    chance(): boolean
  }
}

export function StringExt(): void {
  String.prototype.isNum = function (): boolean {
    return StringUtil.isNum(this.toString())
  }
  String.prototype.isBlank = function (): boolean {
    return StringUtil.isBlank(this.toString())
  }
  String.prototype.replaceAll = function (search: string, replacement: string): string {
    return StringUtil.replaceAll(this.toString(), search, replacement)
  }
  String.prototype.remove = function (char: string | string[]): string {
    return StringUtil.remove(this.toString(), char)
  }
  String.prototype._num = function (): number {
    return StringUtil._num(this.toString())
  }
  String.prototype._json = function <T>(): T {
    return StringUtil._json(this.toString())
  }
  String.prototype.secs = function (): number {
    return TimeUtil.secs(StringUtil._num(this.toString()))
  }
  String.prototype.mins = function (): number {
    return TimeUtil.mins(StringUtil._num(this.toString()))
  }
  String.prototype.hours = function (): number {
    return TimeUtil.hours(StringUtil._num(this.toString()))
  }
  String.prototype.days = function (): number {
    return TimeUtil.days(StringUtil._num(this.toString()))
  }
  String.prototype.chance = function (): boolean {
    const num = this.substring(0, this.length - 1)._num()
    if (this[this.length - 1] !== '%' || num < 0 || num > 100) {
      throw new TypeError(`StringUtil: You must provide a valid percentage between 0% to 100%`)
    }
    return RandomUtil.chance(num)
  }
}
