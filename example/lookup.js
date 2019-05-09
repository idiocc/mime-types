import { lookup } from '../src'

console.log(lookup('json'))
console.log(lookup('.md'))
console.log(lookup('file.html'))
console.log(lookup('folder/file.js'))
console.log(lookup('folder/.htaccess'))

console.log(lookup('cats'))