// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    files: ['**/*.js', '**/*.vue', '**/*.ts'],
    ignores: ['node_modules'],
    rules: {
      'prettier/prettier': ['error', {
        'endOfLine': 'auto'
      }],
      'vue/multi-word-component-names': 'off'
    },
  }
)
