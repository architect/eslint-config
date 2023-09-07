let off = 'off'
let err = 'error'
module.exports = {
  parserOptions: {
    ecmaVersion: 11 // 2020
  },
  // parserOptions default source type is `script`; override to `module` because eslint bailed on #12675
  overrides: [ {
    files: [ '*.mjs' ],
    parserOptions: {
      sourceType: 'module',
    }
  } ],
  env: {
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  plugins: [
    'filenames',
    'fp',
    'import'
  ],
  rules: {
    // Disable rules from base configurations
    'arrow-body-style':             off,
    'no-console':                   off,
    'no-inner-declarations':        off,
    'no-redeclare':                 off,
    'no-useless-escape':            off,
    // Enable additional rules
    'global-require':               err,
    'handle-callback-err':          err,
    'linebreak-style':            [ err, 'unix' ],
    'no-cond-assign':             [ err, 'always' ],
    // Style
    'array-bracket-spacing':      [ err, 'always' ],
    'arrow-spacing':                err,
    'brace-style':                [ err, 'stroustrup', { allowSingleLine: true } ],
    'comma-spacing':              [ err, { before: false, after: true } ],
    'computed-property-spacing':    err,
    'eol-last':                     err,
    'fp/no-class':                  err,
    'func-call-spacing':            err,
    'func-style':                 [ err, 'declaration', { allowArrowFunctions: true } ],
    'indent':                     [ err, 2 ],
    'key-spacing':                [ err, { beforeColon: false, mode: 'minimum' } ],
    'keyword-spacing':              err,
    'no-trailing-spaces':           err,
    'object-curly-spacing':       [ err, 'always' ],
    'quotes':                     [ err, 'single', { allowTemplateLiterals: true, avoidEscape: true } ],
    'semi':                       [ err, 'never' ],
    'space-before-function-paren':  err,
    'space-infix-ops':              err,
    'spaced-comment':               err,
    'template-curly-spacing':       err,
    // Modules must resolve
    'import/no-unresolved':       [ err, { commonjs: true, amd: true } ],
    // Ensure filesystem safe filenames
    'filenames/match-regex':      [ err, '^[a-z0-9-_.]+$', true ],
  },
}
