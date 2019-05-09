# @goa/mime-types

[![npm version](https://badge.fury.io/js/%40goa%2Fmime-types.svg)](https://npmjs.org/package/@goa/mime-types)

`@goa/mime-types` is the [Fork](https://github.com/jshttp/mime-types) of The Ultimate Javascript Content-Type utility Written In ES6 And Optimised With JavaScript Compiler. Comes bundled with [`mime-db`](https://github.com/jshttp/mime-db).

The original module has been updated to be used in [`@goa/koa`](https://artdecocode.com/goa/): _Koa_ web server compiled with _Google Closure Compiler_ using [**Depack**](https://artdecocode.com/depack/) into a single file library (0 dependencies).

```sh
yarn add @goa/mime-types
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`lookup(path: string): string`](#lookuppath-string-string)
- [`contentType(type: string): string`](#contenttypetype-string-string)
- [`extension(type: string): string`](#extensiontype-string-string)
- [`charset(type: string): string`](#charsettype-string-string)
- [`types`](#types)
- [`extensions`](#extensions)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import { lookup, contentType, extension, charset, types } from '@goa/mime-types'
```

All functions return `false` if input is invalid or not found.

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `lookup(`<br/>&nbsp;&nbsp;`path: string,`<br/>`): string`

Lookup the content-type associated with a file.

```js
import { lookup } from '@goa/mime-types'

console.log(lookup('json'))
console.log(lookup('.md'))
console.log(lookup('file.html'))
console.log(lookup('folder/file.js'))
console.log(lookup('folder/.htaccess'))

console.log(lookup('cats'))
```
```
application/json
text/markdown
text/html
application/javascript
false
false
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## `contentType(`<br/>&nbsp;&nbsp;`type: string,`<br/>`): string`

Create a full content-type header given a content-type or extension. When given an extension, `mime.lookup` is used to get the matching content-type, otherwise the given content-type is used. Then if the content-type does not already have a `charset` parameter, `mime.charset` is used to get the default charset and add to the returned content-type.

```js
import { contentType } from '@goa/mime-types'
import { extname } from 'path'

console.log(contentType('markdown'))
console.log(contentType('file.json'))
console.log(contentType('text/html'))
console.log(contentType('text/html; charset=iso-8859-1'))

// from a full path
console.log(contentType(extname('/path/to/file.json')))
```
```
text/markdown; charset=utf-8
application/json; charset=utf-8
text/html; charset=utf-8
text/html; charset=iso-8859-1
application/json; charset=utf-8
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/3.svg?sanitize=true"></a></p>

## `extension(`<br/>&nbsp;&nbsp;`type: string,`<br/>`): string`

Get the default extension for a content-type.

```js
import { extension } from '@goa/mime-types'

console.log(extension('application/octet-stream'))
```
```
bin
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/4.svg?sanitize=true"></a></p>

## `charset(`<br/>&nbsp;&nbsp;`type: string,`<br/>`): string`

Lookup the implied default charset of a content-type.

```js
import { charset } from '@goa/mime-types'

console.log(charset('text/markdown'))
```
```
UTF-8
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/5.svg?sanitize=true"></a></p>

## `types`

A map of content-types by extension.

```js
import { types } from '@goa/mime-types'

console.log(types['json'])
```
```
application/json
```

## `extensions`

A map of extensions by content-type.

```js
import { extensions } from '@goa/mime-types'

console.log(extensions['application/mp4'])
```
```
[ 'mp4s', 'm4p' ]
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/6.svg?sanitize=true"></a></p>

## Copyright

Original Work by [Jonathan Ong, Douglas Christopher Wilson](https://github.com/jshttp/mime-types).

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png" alt="Art Deco" />
      </a>
    </th>
    <th>© <a href="https://artd.eco">Art Deco</a> for <a href="https://idio.cc">Idio</a> 2019</th>
    <th>
      <a href="https://idio.cc">
        <img src="https://avatars3.githubusercontent.com/u/40834161?s=100" width="100" alt="Idio" />
      </a>
    </th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img src="https://raw.githubusercontent.com/artdecoweb/www.technation.sucks/master/anim.gif"
          alt="Tech Nation Visa" />
      </a>
    </th>
    <th><a href="https://www.technation.sucks">Tech Nation Visa Sucks</a></th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>