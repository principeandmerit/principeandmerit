// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    '@stylistic/semi': 'off',
    'vue/multi-word-component-names': 'off',
  },
})
