const path = require('path');

const {
    NODE_ENV = 'production',
  } = process.env;
  
module.exports = {
  entry: './src/index.ts',
  mode: NODE_ENV,
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watch: NODE_ENV === 'development',
};