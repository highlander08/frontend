module.exports = {
  presets: [ // configuraçôes feitas por terceiros // 
    '@babel/preset-env', // converte um javacript para um javascript antigo, para que navegadores antigos entendam, ou converter codigos em que o node nao entende//
    '@babel/preset-react' // entender o html dentro do javascript para que o browser entenda //
  ],
  // plugin para usar o modelo asincorna nas aplicações //
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
};