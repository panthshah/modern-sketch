const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'resources'),
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    'sketch/dom': 'commonjs sketch/dom',
    'sketch/ui': 'commonjs sketch/ui',
    'sketch/settings': 'commonjs sketch/settings',
    'sketch/async': 'commonjs sketch/async'
  },
  devtool: 'source-map'
}