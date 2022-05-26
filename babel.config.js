module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
      },
    ],
  ],
  env: {
    test: {
      plugins: [
        'react-hot-loader/babel',
        'effector/babel-plugin',
        [
          '@babel/transform-runtime',
          {
            regenerator: true,
          },
        ],
      ],
    },
  },
};
