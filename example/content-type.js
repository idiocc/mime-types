import { contentType } from '../src'
import { extname } from 'path'

console.log(contentType('markdown'))
console.log(contentType('file.json'))
console.log(contentType('text/html'))
console.log(contentType('text/html; charset=iso-8859-1'))

// from a full path
console.log(contentType(extname('/path/to/file.json')))