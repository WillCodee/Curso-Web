const fs = require('fs').promises

module.exports = (caminho) => 
    fs.readFile(caminho, 'utf8')


/*Usa o módulo fs.promises para ler o arquivo no formato utf8.

Exporta a função que retorna o conteúdo do arquivo. 
*/