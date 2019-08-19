module.exports = {
  presets: [
    ['@babel/env', { loose: true }],
    '@babel/react',
  ],
  env: {
    esm: {
      presets: [
        ['@babel/env', { loose: true, modules: false }],
        '@babel/preset-react',
      ],
    },
  },
};
