// Adapted with gratitude from eslint-plugin-filenames (https://github.com/selaux/eslint-plugin-filenames) and used under an MIT license

const ignoredFilenames = [ '<text>', '<input>' ]

module.exports = function isIgnoredFilename (filename) {
  return ignoredFilenames.indexOf(filename) !== -1
}
