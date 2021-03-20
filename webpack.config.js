const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'my-bundle.js',
    path: path.resolve(__dirname, 'build'),
    },
    module: {
      rules: [
      {
        test:  /\.scss$/i,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader',
        ],
      },
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
            },
     {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[path][name].[ext]',
              limit: 8192,
              esModule: false,
            },
          },
          'img-loader',
        ],
        },
     {
        test: /\.(ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'src/index.html' }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        port: 4444,
        stats: 'errors-only',
        open: true,
    },
};

