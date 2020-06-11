const path = require('path'); // dando acesso ao modulo // 

module.exports = {
  // pegando diretorio frontend && entro na pasta src e procura arquivo // 
  entry: path.resolve(__dirname, 'src','index.js'),
  //  qual arquivo vai ser gerado despois de convertido $$ 
  output: {
   // a pasta public recebe o arquivo da biod
   path: path.resolve(__dirname, 'public'),
   // passando o nome do arquivo//
   filename: 'bundle.js'
  },
   devServer: {
     //qual que é o caminho para o  diretorio que contem arquivos publicos da aplicação
     contentBase: path.resolve(__dirname, 'public'),
   },

  // outras regras //
  module: {
    //adicionando loader //
    rules :[
      // como entender o javascript //
      {
        // quando usar javascipt que nao esteja na pasta node module converta usando babel loader
         test: /\.js$/, 
         exclude: /node_modules/, 
         use: {
           loader: 'babel-loader', 
         }
      },
      //quando usar css que nao esteja na pasta node module converta usando babel loader
      {
         test: /\.css$/,
         exclude: /node_modules/,
         use: [
           { loader: 'style-loader'}, // pega css e injetar dentro do html //
           { loader: 'css-loader'}, // pega o css e passa pelo o webpack //
         ]
      },
      {
        test: /.*\.(jpg|gif|jpe?g)$/i,
        use:{
          loader: 'file-loader',
        }
      }
    ]
  },
};
// ao usar webpack nas aplicaçoes ja pode ser usado importaçoes ex: import //