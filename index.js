'use strict'

module.exports = function encodeUtf8 (input) {
  const result = []
  const size = input.length

  for (let index = 0; index < size; index++) {
    let point = input.charCodeAt(index)

    if (point >= 0xD800 && point <= 0xDBFF && size > index + 1) {
      const second = input.charCodeAt(index + 1)

      if (second >= 0xDC00 && second <= 0xDFFF) {
        // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        point = (point - 0xD800) * 0x400 + second - 0xDC00 + 0x10000
        index += 1
      }
    }

    if (point < 128) {
      result.push(point)
    } else if (point < 2048) {
      result.push((point >> 6) | 192)
      result.push((point & 63) | 128)
    } else if (point < 65536) {
      result.push((point >> 12) | 224)
      result.push(((point >> 6) & 63) | 128)
      result.push((point & 63) | 128)
    } else if (point < 2097152) {
      result.push((point >> 18) | 240)
      result.push(((point >> 12) & 63) | 128)
      result.push(((point >> 6) & 63) | 128)
      result.push((point & 63) | 128)
    } else {
      throw new Error(`Code point ${point} cannot be encoded with UTF8`)
    }
  }

  return Uint8Array.from(result).buffer
}
