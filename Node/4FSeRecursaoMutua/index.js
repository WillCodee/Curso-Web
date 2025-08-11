const fs = require('fs').promises //Lista as paginas dentro da Pasta
const path = require('path')

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir) //Ler os arquivos
    Walk(files,rootDir)
}

async function Walk(files,rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFullPath)

        if(/\.git/g.test(fileFullPath)) continue
        if(/node_modules/g.test(fileFullPath)) continue

        if(stats.isDirectory()){ //Se for um diretorio
            readdir(fileFullPath) //Liste pra mim os arquivos dele
            continue;
        }

        if(!/\.css$/g.test(fileFullPath)
        && !/\.html$/g.test(fileFullPath)
        )continue
        console.log(fileFullPath)
    }
}
readdir('/Users/willc/OneDrive/Área de Trabalho/Curso Web')














