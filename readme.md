# Encode UTF8

Turn a string into an ArrayBuffer by using the UTF8 encoding.

## Installation

```js
npm install --save encode-utf8
```

## Usage

```js
import encodeUtf8 from 'encode-utf8'

console.log(encodeUtf8('Hello, World!'))
//=> ArrayBuffer { byteLength: 13 }

console.log(encodeUtf8('🐵 🙈 🙉 🙊'))
//=> ArrayBuffer { byteLength: 19 }
```

## API

### `encodeUtf8(input)`

- `input` (`string`, required)
- returns `ArrayBuffer` - an ArrayBuffer with the `input` string represented as UTF8 encoded data
