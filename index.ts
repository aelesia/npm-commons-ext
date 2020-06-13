import { DateExt } from './src/prototype/DateExt'
import { ArrayExt } from './src/prototype/ArrayExt'
import { StringExt } from './src/prototype/StringExt'

export const extend = {
  date: DateExt,
  array: ArrayExt,
  string: StringExt,
  all: () => {
    DateExt()
    ArrayExt()
    StringExt()
  }
}
