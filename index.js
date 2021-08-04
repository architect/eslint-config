/* eslint-disable filenames/match-regex */
module.exports = {
  parserOptions: {
    ecmaVersion: 11 // 2020
  },
  env: {
    node: true
  },
  extends: 'eslint:recommended',
  plugins: [
    'filenames',
    'fp',
    'import'
  ],
  rules: {
    // Disable rules from base configurations
    'arrow-body-style': 'off',
    'no-console': 'off',
    'no-inner-declarations': 'off',
    'no-redeclare': 'off',
    'no-useless-escape': 'off',
    // Enable additional rules
    'global-require': 'error',
    'handle-callback-err': 'error',
    'linebreak-style': [ 'error', 'unix' ],
    'no-cond-assign': [ 'error', 'always' ],
    // Style
    'array-bracket-spacing': [ 'error', 'always' ],
    'arrow-spacing': 'error',
    'brace-style': [ 'error', 'stroustrup', { allowSingleLine: true } ],
    'comma-spacing': [ 'error', { 'before': false, 'after': true } ],
    'computed-property-spacing': 'error',
    'eol-last': 'error',
    'fp/no-class': 'error',
    'func-call-spacing': 'error',
    'func-style': [ 'error', 'declaration', { allowArrowFunctions: true } ],
    'indent': [ 'error', 2 ],
    'key-spacing': [ 'error', { beforeColon: false, mode: 'minimum' } ],
    'keyword-spacing': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [ 'error', 'always' ],
    'quotes': [ 'error', 'single', { allowTemplateLiterals: true, avoidEscape: true } ],
    'require-await': 'error',
    'semi': [ 'error', 'never' ],
    'space-before-function-paren': 'error',
    'space-infix-ops': 'error',
    'spaced-comment': 'error',
    'template-curly-spacing': 'error',
    // Modules must resolve
    'import/no-unresolved': [ 'error', { commonjs: true, amd: true } ],
    // Ensure filesystem safe filenames
    'filenames/match-regex': [ 'error', '^[a-z0-9-_]+$', true ],

    /**
     * Maybes for later!
     */
    // 'id-length' // help ppl keep things descriptive
    // 'max-params' // prob want to shoot for like 5
    // 'no-var'
    // 'quote-props'
    // 'no-use-before-define'
  }
}
