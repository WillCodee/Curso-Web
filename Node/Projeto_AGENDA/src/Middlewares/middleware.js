exports.middlewareGlobal = (req,res,next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local.'
    next()
}

exports.outroMiddlewareGlobal = (req,res,next) => {
    next()
}

exports.checkCsrfError = (err, req,res,next) => {
    if(err && err.code === 'EBADCSRFTOKEN'){
        return res.render('404')
    }
    next(err)
}


exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken  = req.csrfToken()
    next()
}