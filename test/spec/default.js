import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import mimeTypes from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof mimeTypes, 'function')
  },
  async 'calls package without error'() {
    await mimeTypes()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await mimeTypes({
      text,
    })
    ok(res, text)
  },
}

export default T