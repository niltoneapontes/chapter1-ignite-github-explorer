const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // importa o plugin

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production', // auxilia durante o desenvolvimento
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.jsx'), // entrada do webpack
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js' // saída do webpack
  },
  resolve: {
    // extensões que não precisarão ser configuradas
    extensions: ['.js', '.jsx'], // extensões a serem "resolvidas"
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/, 
        exclude: /node_modules/, //node modules nao deve ser testada
        use: 'babel-loader' //precisa instalar
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