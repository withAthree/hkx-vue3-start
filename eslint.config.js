import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    vue: true,
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: 'single', // or 'double'
    },
    typescript: true,
    jsonc: false,
    yaml: false,
    ignores: [
      // ...globs
    ],
    lessOpinionated: true,
  },
  {
    // Remember to specify the file glob here, otherwise it might cause the vue plugin to handle non-vue files
    files: ['**/*.vue'],
    rules: {
      'vue/operator-linebreak': ['error', 'before'],
    },
  },
  {
    // Without `files`, they are general rules for all files
    rules: {
      'style/semi': ['error', 'always'],
    },
  },
)
