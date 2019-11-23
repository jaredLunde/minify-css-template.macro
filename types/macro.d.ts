declare module 'minify-css.macro' {
  const minifyCss: (literals: TemplateStringsArray, ...placeholders: string[]) => string
  export default minifyCss
}
