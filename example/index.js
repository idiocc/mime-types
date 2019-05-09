/* alanode example/ */
import mimeTypes from '../src'

(async () => {
  const res = await mimeTypes({
    text: 'example',
  })
  console.log(res)
})()