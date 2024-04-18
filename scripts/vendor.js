#! /usr/bin/env node

const { readFileSync, writeFileSync } = require('node:fs')
const { join } = require('node:path')
const cwd = process.cwd()

async function main () {
  const allGlobalsFile = join(cwd, 'node_modules', 'globals', 'globals.json')
  const allGlobals = JSON.parse(readFileSync(allGlobalsFile))

  function aggregate (a, b) {
    Object.keys(b).forEach(k => {
      if (a[k] === undefined) a[k] = b[k]
    })
    return a
  }

  // Core JS
  const { builtin, es5, es2015, es2017, es2020, es2021 } = allGlobals
  const common = [ builtin, es5, es2015, es2017, es2020, es2021 ].reduce(aggregate, {})

  // Browser
  const { browser, worker, serviceworker } = allGlobals
  const browserGlobals = [ common, browser, worker, serviceworker ].reduce(aggregate, {})

  // Node
  const { node, nodeBuiltin, commonjs } = allGlobals
  const nodeGlobals = [ common, node, nodeBuiltin, commonjs ].reduce(aggregate, {})

  const json = JSON.stringify({ node: nodeGlobals, browser: browserGlobals }, null, 2) + '\n'
  const dest = join(cwd, 'globals.json')
  writeFileSync(dest, json)
}
main()
