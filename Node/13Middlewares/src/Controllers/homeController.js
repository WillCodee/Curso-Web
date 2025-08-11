exports.paginaInicial = (req,res, next) => {
    //console.log('Respondendo ao Cliente') //middleware
    res.render('index')
    //next() //middleware
    return// se não for usar o middleware
}

exports.trataPost = (req,res, next) => {
    res.send(req.body)
}
