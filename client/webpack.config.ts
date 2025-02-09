import HtmlWebpackPlugin from 'html-webpack-plugin';
const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.tsx',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'), // Outputs to the 'dist' folder
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(mp4|webm|ogg|avi|mov)$/i, // Matches files ending with .mp4 extension
        type: 'asset/resource'
      }
      // {
      //   test: /\.(jpg|png)$/,
      //   use: {
      //     loader: 'url-loader',
      //   },
      // },
    ]
  },
  devServer: {
    historyApiFallback: true, // Redirect all 404s to index.html
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ]
};