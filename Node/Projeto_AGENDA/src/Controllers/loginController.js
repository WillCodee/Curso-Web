const Login = require('../models/LoginModel')

exports.index = (req,res) =>{
    res.render('login')
}

exports.register = async function(req,res){
    try{
        const login = new Login(req.body)
        await login.register()

        if(login.errors.length > 0){
            req.flash('errors', login.errors) //menssagens
            req.session.save(function() {
                return res.redirect(req.get('referer') || '/login/index')
            })
            return
        }

         req.flash('success', 'Seu usuário foi criado com sucesso') //menssagens
            req.session.save(function() {
                return res.redirect(req.get('referer') || '/login/index')
            })
    }catch(e){
        console.log(e)
        return res.render('404')
    }
    
}