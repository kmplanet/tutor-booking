const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const html = require('html-loader');
//https://webpack.js.org/loaders/html-loader/
module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        // test: /\.jsx?/,
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
  ],
  stats: {
    children: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '..', 'build'),
      publicPath: 'build',
    },
    historyApiFallback: true,
    //FIXME: '/api2'
    proxy: [
      {
        context: ['/api', '/api2'],
        changeOrigin: true,
        secure: false,
        target: 'http://localhost:3000/',
      },
    ],
  },
};
//   module: {
//     rules: [
//       {
//         test: /\.jsx?/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: { preset: ['@babel/preset-env', '@babel/preset-react'] },
//         },
//       },
//     ],
//   },
// };
