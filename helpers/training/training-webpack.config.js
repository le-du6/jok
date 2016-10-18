module.exports = {
  entry: './src/main.js',
  output: {
    filename: './src/bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './src',
    port: 3427
  },
  module: {
    loaders:[{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  }
};