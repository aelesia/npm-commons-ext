import { ArrayUtil } from '@aelesia/commons/dist/src/collections/util/ArrayUtil'

declare global {
  interface Array<T> {
    max(): number
    isEmpty(): boolean
    random(): T
    first(): T
    last(): T
  }
}

export function ArrayExt(): void {
  Array.prototype.max = function (): number {
    return ArrayUtil.max(this)
  }
  Array.prototype.isEmpty = function (): boolean {
    return ArrayUtil.isEmpty(this)
  }
  Array.prototype.random = function () {
    return ArrayUtil.random(this)
  }
  Array.prototype.first = function () {
    return ArrayUtil.first(this)
  }
  Array.prototype.last = function () {
    return ArrayUtil.last(this)
  }
}
