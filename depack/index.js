const _MediaTypes = require('./depack')

/**
 * Get the default extension for a MIME type.
 * @param {string} type
 * @return {boolean|string}
 */
const extension = (type) => {
  return _MediaTypes.extension(type)
}

/**
 * Get the default charset for a MIME type.
 * @param {string} type
 * @return {boolean|string}
 */
const charset = (type) => {
  return _MediaTypes.charset(type)
}

/**
 * Create a full Content-Type header given a MIME type or extension.
 * @param {string} type
 * @return {boolean|string}
 */
const contentType = (type) => {
  return _MediaTypes.contentType(type)
}

/**
 * Lookup the MIME type for a file path/extension.
 * @param {string} path
 * @return {boolean|string}
 */
const lookup = (path) => {
  return _MediaTypes.lookup(path)
}

module.exports.extension = extension
module.exports.charset = charset
module.exports.contentType = contentType
module.exports.lookup = lookup
module.exports.charsets = _MediaTypes.charsets