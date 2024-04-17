let off = 'off'
let err = 'error'
let s = '@stylistic/js/'

module.exports = {
  parserOptions: {
    ecmaVersion: 13, // 2022
  },
  // parserOptions default source type is `script`; override to `module` because eslint bailed on #12675
  overrides: [ {
    files: [ '*.mjs' ],
    parserOptions: {
      sourceType: 'module',
    },
  } ],
  env: {
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  plugins: [
    '@stylistic/js',
    'filenames',
    'fp',
    'import',
  ],
  rules: {
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
    // Modules must resolve
    'import/no-unresolved':             [ err, { commonjs: true, amd: true } ],
    // Ensure filesystem safe filenames
    'filenames/match-regex':            [ err, '^[a-z0-9-_.]+$', true ],
  },
}
