/* eslint-env mocha */

'use strict'

const assert = require('assert')
const encodeUtf8 = require('./')

const testCases = [
  'ﾟ･✿ヾ╲(｡◕‿◕｡)╱✿･ﾟ',
  '𝌆',
  '🐵 🙈 🙉 🙊',
  '💩',
  'åß∂ƒ©˙∆˚¬…æ',
  'Hello, World!',
  'Powerلُلُصّبُلُلصّبُررً ॣ ॣh ॣ ॣ冗',
  '𝕿𝖍𝖊 𝖖𝖚𝖎𝖈𝖐 𝖇𝖗𝖔𝖜𝖓 𝖋𝖔𝖝 𝖏𝖚𝖒𝖕𝖘 𝖔𝖛𝖊𝖗 𝖙𝖍𝖊 𝖑𝖆𝖟𝖞 𝖉𝖔𝖌',
  '사회과학원 어학연구소'
]

describe('encode-utf8', () => {
  for (const input of testCases) {
    it(`should encode "${input}"`, () => {
      const actual = Buffer.from(encodeUtf8(input))
      const expected = Buffer.from(input, 'utf8')

      assert.ok(actual.equals(expected))
    })
  }
})
