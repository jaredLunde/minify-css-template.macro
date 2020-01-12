declare module 'minify-css.macro' {
  const minifyCss: (literals: TemplateStringsArray, ...placeholders: any[]) => string
  export default minifyCss
}
