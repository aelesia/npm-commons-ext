import { DateUtil } from '@aelesia/commons/dist/src/collections/util/DateUtil'

declare global {
  interface Date {
    utc(): number
    epoch(): number
    timeUntil(): number
    timeSince(): number
    elapsed(date: Date): number
    add(ms: number): Date
    minus(ms: number): Date
    isBefore(date: Date): boolean
    isAfter(date: Date): boolean
    isPast(): boolean
    isFuture(): boolean
    _f(format: string): string
  }
}

export function DateExt(): void {
  Date.prototype.utc = function (): number {
    return DateUtil.utc(this)
  }
  Date.prototype.epoch = function (): number {
    return DateUtil.epoch(this)
  }
  Date.prototype.timeUntil = function (): number {
    return DateUtil.until(this)
  }
  Date.prototype.timeSince = function (): number {
    return DateUtil.since(this)
  }
  Date.prototype.elapsed = function (date: Date): number {
    return DateUtil.elapsed(date, this)
  }
  Date.prototype.add = function (ms: number): Date {
    return DateUtil.add(ms, this)
  }
  Date.prototype.minus = function (ms: number): Date {
    return DateUtil.minus(ms, this)
  }
  Date.prototype.isBefore = function (date: Date): boolean {
    return DateUtil.isBefore(this, date)
  }
  Date.prototype.isAfter = function (date: Date): boolean {
    return DateUtil.isAfter(this, date)
  }
  Date.prototype.isPast = function (): boolean {
    return DateUtil.isPast(this)
  }
  Date.prototype.isFuture = function (): boolean {
    return DateUtil.isFuture(this)
  }
  Date.prototype._f = function (format: string): string {
    return DateUtil._f(this, format)
  }
}
