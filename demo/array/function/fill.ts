export function fill(array: any[], value: any, start: number, end: number = array.length) {
  let length = array === null ? 0 : array.length
  if (!length) {
    return []
  }
  if (start && typeof start !== 'number' && isIterateeCall(array, value, start)) {
    start = 0
    end = length
  }
  return baseFill(array, value, start, end)
}
const funcTag = '[object Function]'
const genTag = '[object GeneratorFunction]'
const asyncTag = '[object AsyncFunction]'
const proxyTag = '[object Proxy]'
const MAX_SAFE_INTEGER = 9007199254740991
const reIsUint = /^(?:0|[1-9]\d*)$/
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false
  }
  let type = typeof index
  if (type === 'number' ? isArrayLike(object) && isIndex(index, object.length) : type === 'string' && index in object) {
    return eq(object[index], value)
  }
  return false
}
function eq(value, other) {
  return value === other || (value !== value && other !== other)
}
function isIndex(value, length) {
  let type = typeof value
  length = length === null ? MAX_SAFE_INTEGER : length

  return !!length && (type === 'number' || (type != 'symbol' && reIsUint.test(value))) && (value > -1 && value % 1 === 0 && value < length)
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value)
}
function isFunction(value) {
  if (!isObject(value)) {
    return false
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  let tag = baseGetTag(value)
  return tag === funcTag || tag === genTag || tag === asyncTag || tag === proxyTag
}
function isLength(value) {
  return typeof value === 'number' && value > -1 && value % 1 === 0 && value <= MAX_SAFE_INTEGER
}
function baseFill(array: any, value: any, start: number, end: number) {
  let length = array.length

  start = toInteger(start)
  if (start < 0) {
    start = -start > length ? 0 : length + start
  }
  end = end === undefined || end > length ? length : toInteger(end)
  if (end < 0) {
    end += length
  }
  end = start > end ? 0 : toLength(end)
  while (start < end) {
    array[start++] = value
  }
  return array
}
let MAX_ARRAY_LENGTH = 4294967295
function toLength(value) {
  return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0
}
/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower
    }
  }
  return number
}
function toInteger(value) {
  let result = toFinite(value),
    remainder = result % 1

  return result === result ? (remainder ? result - remainder : result) : 0
}
const INFINITY = 1 / 0
const MAX_INTEGER = 1.7976931348623157e308
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0
  }
  value = toNumber(value)
  if (value === INFINITY || value === -INFINITY) {
    let sign = value < 0 ? -1 : 1
    return sign * MAX_INTEGER
  }
  return value === value ? value : 0
}
let freeParseInt = parseInt
const reIsBinary = /^0b[01]+$/i
const reIsOctal = /^0o[0-7]+$/i
const reIsBadHex = /^[-+]0x[0-9a-f]+$/i
const symbolTag = '[object Symbol]'
const undefinedTag = '[object Undefined]'
const reTrim = /^\s+|\s+$/g
const nullTag = '[object Null]'
const NAN = 0 / 0
function toNumber(value) {
  if (typeof value === 'number') {
    return value
  }
  if (isSymbol(value)) {
    return NAN
  }
  if (isObject(value)) {
    let other = typeof value.valueOf === 'function' ? value.valueOf() : value
    value = isObject(other) ? other + '' : other
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value
  }
  value = value.replace(reTrim, '')
  let isBinary = reIsBinary.test(value)
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value
}

function isSymbol(value) {
  return typeof value === 'symbol' || (isObjectLike(value) && baseGetTag(value) === symbolTag)
}
function isObjectLike(value) {
  return value != null && typeof value === 'object'
}

function baseGetTag(value) {
  if (value === null) {
    return value === undefined ? undefinedTag : nullTag
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value)
}
let symToStringTag = Symbol ? Symbol.toStringTag : undefined
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  let isOwn = hasOwnProperty.call(value, symToStringTag),
    tag = value[symToStringTag]

  try {
    value[symToStringTag] = undefined
    let unmasked = true
  } catch (e) {}

  let result = nativeObjectToString.call(value)
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag
    } else {
      delete value[symToStringTag]
    }
  }
  return result
}
let objectProto = Object.prototype
let nativeObjectToString = objectProto.toString
let hasOwnProperty = objectProto.hasOwnProperty
function objectToString(value) {
  return nativeObjectToString.call(value)
}
function isObject(value) {
  let type = typeof value
  return value != null && (type === 'object' || type === 'function')
}
