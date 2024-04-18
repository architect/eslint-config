// Adapted with gratitude from eslint-plugin-filenames (https://github.com/selaux/eslint-plugin-filenames) and used under an MIT license

/**
 * @fileoverview Rule to ensure that filenames match a convention (default: camelCase)
 * @author Stefan Lau
 */

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const path = require('path'),
  parseFilename = require('../lib/parse-filename'),
  getExportedName = require('../lib/get-exported-name'),
  isIgnoredFilename = require('../lib/is-ignored-filename')

module.exports = {
  meta: {
    schema: {
      type: 'array',
      minItems: 0,
      maxItems: 3,
    },
  },
  create: function (context) {
    const defaultRegexp = /^([a-z0-9]+)([A-Z][a-z0-9]+)*$/g,
      conventionRegexp = context.options[0] ? new RegExp(context.options[0]) : defaultRegexp,
      ignoreExporting = context.options[1] ? context.options[1] : false

    return {
      'Program': function (node) {
        const filename = context.getFilename(),
          absoluteFilename = path.resolve(filename),
          parsed = parseFilename(absoluteFilename),
          shouldIgnore = isIgnoredFilename(filename),
          isExporting = Boolean(getExportedName(node)),
          matchesRegex = conventionRegexp.test(parsed.name)

        if (shouldIgnore) return
        if (ignoreExporting && isExporting) return
        if (!matchesRegex) {
          context.report(node,
            `Filename '{{name}}' does not match the naming convention.`,
            { name: parsed.base },
          )
        }
      },
    }
  },
}
