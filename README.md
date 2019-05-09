# @goa/mime-types

[![npm version](https://badge.fury.io/js/@goa/mime-types.svg)](https://npmjs.org/package/@goa/mime-types)

`@goa/mime-types` is [Fork] The ultimate javascript content-type utility.

```sh
yarn add @goa/mime-types
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`mimeTypes(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
  * [`_@goa/mime-types.Config`](#type-_@goa/mime-typesconfig)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import mimeTypes from '@goa/mime-types'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `mimeTypes(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

__<a name="type-_@goa/mime-typesconfig">`_@goa/mime-types.Config`</a>__: Options for the program.

|   Name    |       Type       |    Description    | Default |
| --------- | ---------------- | ----------------- | ------- |
| shouldRun | <em>boolean</em> | A boolean option. | `true`  |
| __text*__ | <em>string</em>  | A text to return. | -       |

```js
/* alanode example/ */
import mimeTypes from '@goa/mime-types'

(async () => {
  const res = await mimeTypes({
    text: 'example',
  })
  console.log(res)
})()
```
```
example
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [Idio][1] 2019

[1]: https://idio.cc

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>