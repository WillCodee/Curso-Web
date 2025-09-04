const Login = require('../models/LoginModel')

exports.index = (req,res) =>{
    if(req.session.user){
        return res.render('login_logado')
    }
    
    // console.log(req.session.user)
    return res.render('login')
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

exports.login = async function(req,res){
    try{
        const login = new Login(req.body)
        await login.login()

        if(login.errors.length > 0){
            req.flash('errors', login.errors) //menssagens
            req.session.save(function() {
                return res.redirect(req.get('referer') || '/login/index')
            })
            return
        }

         req.flash('success', 'Usuário Logado com Sucesso') //menssagens
         req.session.user = login.user   
         req.session.save(function() {
                return res.redirect(req.get('referer') || '/login/index')
            })
    }catch(e){
        console.log(e)
        return res.render('404')
    }
    
}

exports.logout = function(req, res){
    req.session.destroy()
    res.redirect('/')
}