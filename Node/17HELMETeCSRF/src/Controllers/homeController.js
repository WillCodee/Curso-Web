

exports.paginaInicial = (req,res, next) => {
    //Injetando dados
    res.render('index',{
        titulo: 'Titulo da Pagina',
        numeros:[0,1,2,3,4,5,6,7,8,9]
    })
    return
}

exports.trataPost = (req,res, next) => {
    res.send(req.body)
}
