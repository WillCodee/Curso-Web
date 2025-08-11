

exports.paginaInicial = (req,res, next) => {
    // req.session.usuario = {nome: 'Will', logado:true} -> Exemplo de cookie, essa mensagem ficará aqui por 7 dias
    // console.log(req.session.usuario)

    // Message
    // req.flash('info','Ola Mundo')
    // req.flash('error','asdfasf')
    // req.flash('sucess','bababababa')
    // req.flash('warning','obaobaobaoba')

    // console.log(req.flash('error'), req.flash('sucess'), req.flash('info'))
    
    res.render('index')
    return
}

exports.trataPost = (req,res, next) => {
    res.send(req.body)
}
