import pluginTester from 'babel-plugin-tester'
import plugin from 'babel-plugin-macros'

pluginTester({
  plugin,
  snapshot: true,
  babelOptions: {filename: __filename},
  tests: [
    `
      import css from '../dist/main/macro'
      const foobar = '', 
        foo = {mq: () => {}}
      
      const someStyle = css\`
        foo: bar;
        width: 100%;
        \${theme => theme.foo} \${foobar}
        \${foobar}
        height: 100%;
        background:  rgba(0, 2, 255, 0.1);
         
          /* check out my comment */
        ::before {
          foo: bar;
          width: calc(500px + 10px);
        }
        
        @media \${foo.mq('phone')} {
          width: 30px;
        }
        
        & > input[ type=text ] {
          color: blue !important;
        }
      \`
    `,
  ],
})
