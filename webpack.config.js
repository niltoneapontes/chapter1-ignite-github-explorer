const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // importa o plugin
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production', // auxilia durante o desenvolvimento
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.tsx'), // entrada do webpack
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js' // saída do webpack
  },
  resolve: {
    // extensões que não precisarão ser configuradas
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // extensões a serem "resolvidas"
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true,
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.(j|t)sx$/, 
        exclude: /node_modules/, //node modules nao deve ser testada
        use: {
          loader: 'babel-loader', //precisa instalar
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        }
      },
      {
        test: /\.scss$/, 
        exclude: /node_modules/, //node modules nao deve ser testada
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ] //precisa instalar
      }
    ]
  }
}