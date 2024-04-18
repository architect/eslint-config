const eslint = require('@eslint/js')
const recommended = eslint.configs.recommended.rules
const stylistic = require('@stylistic/eslint-plugin-js')
const arc = require('./src/rules')
const fp = require('eslint-plugin-fp')
// TODO: re-enable eslint-plugin-import once eslint-plugin-import#2948 is fixed
// const importPlugin = require('eslint-plugin-import')

const ecmaVersion = 13 // 2022
const off = 'off'
const err = 'error'
const s = '@stylistic/js/'

const config = {
  plugins: {
    recommended,
    arc,
    '@stylistic/js': stylistic,
    fp,
    // importPlugin,
  },
  rules: {
    // Previously on `eslint:recommended`:
    ...recommended,

    // Disable rules from base configurations
    'arrow-body-style':                   off,
    'no-console':                         off,
    'no-inner-declarations':              off,
    'no-redeclare':                       off,
    'no-useless-escape':                  off,

    // Enable additional rules
    'global-require':                     off,
    'handle-callback-err':                err,
    [s + 'linebreak-style']:            [ err, 'unix' ],
    'no-cond-assign':                   [ err, 'always' ],

    // Style
    [s + 'array-bracket-spacing']:      [ err, 'always' ],
    [s + 'arrow-spacing']:                err,
    [s + 'block-spacing']:                err,
    [s + 'brace-style']:                [ err, 'stroustrup', { allowSingleLine: true } ],
    [s + 'comma-dangle']:               [ err, 'always-multiline' ],
    [s + 'comma-spacing']:              [ err, { before: false, after: true } ],
    [s + 'computed-property-spacing']:    err,
    [s + 'eol-last']:                     err,
    'fp/no-class':                        err,
    [s + 'function-call-spacing']:        err,
    'func-style':                       [ err, 'declaration', { allowArrowFunctions: true } ],
    [s + 'indent']:                     [ err, 2 ],
    [s + 'key-spacing']:                [ err, { beforeColon: false, mode: 'minimum' } ],
    [s + 'keyword-spacing']:              err,
    [s + 'no-mixed-operators']:           err,
    [s + 'no-trailing-spaces']:           err,
    [s + 'object-curly-spacing']:       [ err, 'always' ],
    [s + 'quotes']:                     [ err, 'single', { allowTemplateLiterals: true, avoidEscape: true } ],
    [s + 'semi']:                       [ err, 'never' ],
    [s + 'space-before-blocks']:          err,
    [s + 'space-before-function-paren']:  err,
    [s + 'space-infix-ops']:              err,
    [s + 'spaced-comment']:               err,
    [s + 'template-curly-spacing']:       err,

    // Ensure filesystem safe filenames
    'arc/match-regex':                  [ err, '^[a-z0-9-_.]+$', true ],

    // Modules must resolve
    // 'import/no-unresolved':             [ err, { commonjs: true, amd: true } ],
  },
}


module.exports = [
  // As of ESLint v9 flat config, *.js is assumed to be ESM, so undo that:
  {
    files: [ '**/*.js', '**/*.cjs' ],
    languageOptions: {
      ecmaVersion,
      sourceType: 'commonjs',
    },
    ...config,
  },
  {
    files: [ '**/*.mjs' ],
    languageOptions: {
      ecmaVersion,
      sourceType: 'module',
    },
    ...config,
  },
]
