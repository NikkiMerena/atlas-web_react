// task_3/webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          // 'file-loader'
          {
            loader: 'image-webpack-loader',
            options: {
            bypassOnDebug: true,
            disable: true, // remider: set to false to enable optimization in production
            }
          }
        ]
      },
    ],
  },
  // devServer configuration
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8564,
    open: true, // opens default browser after the server starts
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  mode: 'development',
  // Add source map for better debuggin in dev mode
  devtool: 'inline-source-map',
};
