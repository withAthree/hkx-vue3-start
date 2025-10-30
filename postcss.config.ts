export default {
  plugins: {
    'postcss-nested': {},
    'postcss-simple-vars': {},
    'postcss-extend': {},
    'postcss-mixins': {},
    autoprefixer: {
      overrideBrowserslist: [
        'last 2 versions',
      ],
    },
  },
};
