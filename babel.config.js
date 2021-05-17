module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { // é assim que passamos options para o preset-react
      runtime: 'automatic'
    }], 
    '@babel/preset-typescript'
  ]
}