const { response } = require("express");
const jwt = require('jsonwebtoken');

const validarJWT = (req, res = response, next) => {


   
    const token = req.query.xToken;
 
    if(!token){
        return res.status(401).json({
            ok: false,
            msg: 'error en el token'
        })
    }

    try{

        const { uid, name } =  jwt.verify(token, process.env.SECRET_JWT_SEED);
        //console.log(uid,name);
        req.uid  = uid;
        req.name = name;


    }catch(err){
        return res.status(401).json({
            ok: false,
            msg: 'TOKEN NO VALIDO'
        })
    }

//TODO OK
next();
}


module.exports = {
    validarJWT
}