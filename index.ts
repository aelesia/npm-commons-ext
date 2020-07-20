import { DateExt } from './src/prototype/DateExt'
import { ArrayExt } from './src/prototype/ArrayExt'
import { StringExt } from './src/prototype/StringExt'

DateExt()
ArrayExt()
StringExt()

// This function is empty so that it can be imported and called without ESLint complaining it's un-used
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const extend = {
  date: DateExt,
  array: ArrayExt,
  string: StringExt,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  all: () => {}
}
