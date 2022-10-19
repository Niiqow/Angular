const { response } = require('express');
const Usuario = require('../model/Usuario');
const bcrypt = require('bcrypt');
const { generarJWT } = require('../helpers/jwt');


const crearUsuario = async (req, res = response) => {


    //console.log(req.body);
    const { email, name, password } = req.body;

    try {
        //Verificar Email

        const usuario = await Usuario.findOne({ email });

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe con ese email'
            });
        }

        //CREAR USUARIO CON EL MODELO
        const dbUser = new Usuario(req.body);
        //Hashear password

        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync(password, salt);

        //Generar el JWT (JASON WEB TOKEN)

        const token = await generarJWT(dbUser.id, name);

        //CREAR USUARIO DE BASE DE DATOS

        await dbUser.save();

        //GENERAR RESPUESTA EXISTOSA

        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            token
        });





    } catch (error) {
        return res.json({
            ok: false,
            msg: 'Porfavor hablar con administrador'
        });
    }



    //console.log(email, name, password);


}

const loginUsuario = async (req, res = response) => {

    const { email, password } = req.body;


    try {

        const dbUser = await Usuario.findOne({ email });

        if (!dbUser) {
            return res.status(400).json({
                ok: false,
                msg: 'correo no existe'
            });
        }

        const validPassword = bcrypt.compareSync(password, dbUser.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'password no es correcto'
            });
        }


        //generar json web token

        const token = await generarJWT(dbUser.id, dbUser.name);
        //respuesta del servicio
        return res.json({
            ok: true,
            uid: dbUser.id,
            nameL: dbUser.name,
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'hable con el admin',
        });
    }


    //console.log(email, password);
    // return res.json({
    //     ok: true,
    //     msg: 'Login de usuario /'
    // });
}

const revalidarToken =  async( req, res = response ) => {
   
    const {uid,name} = req;

    //generar jwt
    const token = await generarJWT(uid, name);

    return res.json({
        ok: true,
       uid,
       name
    
    });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}