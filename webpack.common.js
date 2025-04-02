const path = require('path');

module.exports = {
  entry: {
    main: './src/index.tsx',
  },
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '/dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: {
          loader: '@svgr/webpack',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.svg'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@stories': path.resolve(__dirname, 'src/stories'),
    },
  },
};
