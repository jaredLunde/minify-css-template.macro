import generate from '@babel/generator'
import {createMacro} from 'babel-plugin-macros'

export default createMacro(evaluateMacros)

// cycles through each call to the macro and determines an output for each
function evaluateMacros({references}) {
  references.default.forEach(referencePath => {
    let result = referencePath.parentPath.node.quasi.expressions.reduce(
      (p, node) => {
        p[`${node.loc.start.line}:${node.loc.start.column}`] = `\${${
          generate(node).code
        }}`
        return p
      },
      {}
    )
    referencePath.parentPath.node.quasi.quasis.forEach(node => {
      result[`${node.loc.start.line}:${node.loc.start.column}`] = node.value.raw
        .replace(/\s{2,}|\n|\t/g, ' ')
        .replace(/:\s+/g, ':')
        .replace(/;\s+/g, ';')
        .trim()
    })
    const keys = Object.keys(result)
    keys.sort((a, b) => {
      const [a0, a1] = a.split(':')
      const [b0, b1] = b.split(':')

      if (a0 === b0) {
        return a1 - b1
      }

      return a0 - b0
    })
    referencePath.parentPath.replaceWithSourceString(
      `\`${keys.map(k => result[k]).join('')}\``
    )
  })
}
