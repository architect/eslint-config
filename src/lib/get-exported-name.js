// Adapted with gratitude from eslint-plugin-filenames (https://github.com/selaux/eslint-plugin-filenames) and used under an MIT license

function getNodeName (node, options) {
  const op = options || []

  if (node.type === 'Identifier') {
    return node.name
  }

  if (node.id && node.id.type === 'Identifier') {
    return node.id.name
  }

  if (op[2] && node.type === 'CallExpression' && node.callee.type === 'Identifier') {
    return node.callee.name
  }
}

module.exports = function getExportedName (programNode, options) {
  for (let i = 0; i < programNode.body.length; i += 1) {
    const node = programNode.body[i]

    // export default ...
    if (node.type === 'ExportDefaultDeclaration') {
      return getNodeName(node.declaration, options)
    }

    // module.exports = ...
    if (node.type === 'ExpressionStatement' &&
        node.expression.type === 'AssignmentExpression' &&
        node.expression.left.type === 'MemberExpression' &&
        node.expression.left.object.type === 'Identifier' &&
        node.expression.left.object.name === 'module' &&
        node.expression.left.property.type === 'Identifier' &&
        node.expression.left.property.name === 'exports'
    ) {
      return getNodeName(node.expression.right, options)
    }
  }
}
