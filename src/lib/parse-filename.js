// Adapted with gratitude from eslint-plugin-filenames (https://github.com/selaux/eslint-plugin-filenames) and used under an MIT license

const path = require('path')

module.exports = function parseFilename (filename) {
  const ext = path.extname(filename)

  return {
    dir: path.dirname(filename),
    base: path.basename(filename),
    ext: ext,
    name: path.basename(filename, ext),
  }
}
