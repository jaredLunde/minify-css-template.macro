import generate from '@babel/generator'
import {createMacro} from 'babel-plugin-macros'
import type {Node} from '@babel/core'

export default createMacro(function evaluateMacros({references}) {
  references.default.forEach((referencePath) => {
    if ('quasi' in referencePath.parentPath.node) {
      const result = referencePath.parentPath.node.quasi.expressions.reduce<
        Record<string, string>
      >((p, node: Node) => {
        if (!node.loc) return p
        p[`${node.loc.start.line}:${node.loc.start.column}`] = `\${${
          generate(node).code
        }}`
        return p
      }, {})

      referencePath.parentPath.node.quasi.quasis.forEach((node) => {
        if (!node.loc) return

        result[
          `${node.loc.start.line}:${node.loc.start.column}`
        ] = node.value.raw
          .replace(/\s{2,}|\n|\t/g, ' ')
          .replace(/([:;,([{}>~/])\s+/g, '$1')
          .replace(/\s+([;,)\]{}>~/!])/g, '$1')
          .replace(/\/\*\s+/, '/*')
          .replace(/\s+\*\//, '*/')
      })
      const keys = Object.keys(result)
      keys.sort((a, b) => {
        const [a0, a1] = a.split(':').map((str) => parseInt(str))
        const [b0, b1] = b.split(':').map((str) => parseInt(str))

        if (a0 === b0) {
          return a1 - b1
        }

        return a0 - b0
      })
      referencePath.parentPath.replaceWithSourceString(
        `\`${keys
          .map((k) => result[k])
          .join('')
          .trim()}\``
      )
    }
  })
}) as (literals: TemplateStringsArray, ...placeholders: any[]) => string
