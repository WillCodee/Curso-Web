//Precisa criar o arquivo com esse nome

const path = require('path'); //CommonJS

module.exports = {
    mode: 'development', //Deixa um aqrquivo como de um Desenvolvedor pois o
    //webpack vai tentar encurtar tudo (production)
    entry: './src/index.js', // Vai ir para o arquivo do codigo fonte
    output:{
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use:{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]//Regras
    },
    devtool: 'source-map' //Mapeamento
};























