import pluginTester from 'babel-plugin-tester'
import plugin from 'babel-plugin-macros'

pluginTester({
  plugin,
  snapshot: true,
  babelOptions: {filename: __filename},
  tests: [
    `
      import css from './macro'
      const foobar = ''
      
      const someStyle = css\`
        foo: bar;
        width: 100%;
        \${theme => theme.foo} \${foobar}
        \${foobar}
        height: 100%;
      \`
    `,
  ],
})
