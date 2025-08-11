exports.middlewareGlobal = (req,res,next) => {
    
    // if(req.body.cliente){
    //     console.log()
    //     console.log('Postou algo, eu vi',req.body.cliente)
    //     console.log()
    // }
    
    next()
}

exports.middlewareGlobal = (req,res,next) => {
    next()
}
