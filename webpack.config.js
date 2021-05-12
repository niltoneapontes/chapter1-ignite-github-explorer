const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'), // entrada do webpack
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js' // saída do webpack
  },
  resolve: {
    // extensões que não precisarão ser configuradas
    extensions: ['.js', '.jsx'], // extensões a serem "resolvidas"
  },
  module: {
    rules: [
      {
        test: /\.jsx$/, 
        exclude: /node_modules/, //node modules nao deve ser testada
        use: 'babel-loader' //precisa instalar
      }
    ]
  }
}