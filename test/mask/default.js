import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import mimeTypes from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults() {
    const res = await mimeTypes({
      text: this.input,
    })
    return res
  },
  context: Context,
})