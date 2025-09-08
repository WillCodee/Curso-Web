const Contato = require('../models/Contatomodel')

exports.index = async(req,res) => {
    const contatos = await Contato.buscaContatos()
    res.render('index', {contatos})
}
