exports.middlewareGlobal = (req,res,next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local.'
    next()
}

exports.outroMiddlewareGlobal = (req,res,next) => {
    next()
}
