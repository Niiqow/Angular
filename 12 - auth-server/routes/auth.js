const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario,loginUsuario,revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos.js');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();

//crear nuevo usuario
router.post( '/new', [
    check('name')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isLength({ min: 3}).withMessage('El nombre debe contener al menos 3 caracteres'),
    check('email')
        .notEmpty().withMessage('El email es obligatorio')
        .isEmail().withMessage('Email ingresado no es valido'),
    check('password')
        .notEmpty().withMessage('La contraseña es obligatoria')
        .isLength({ min: 6 }).withMessage('La contraseña es mínimo de 6 caracteres'),
        validarCampos
] , crearUsuario );


//Login usuario
router.post('/', [
    check('email')
        .notEmpty().withMessage('El email es obligatorio')
        .isEmail().withMessage('Email ingresado no es valido'),
        check('password')
        .notEmpty().withMessage('La contraseña es obligatoria')
        .isLength({ min: 6 }).withMessage('La contraseña es mínimo de 6 caracteres'),
        validarCampos
],
 loginUsuario);
    

    //Validar y revalidar token
router.get('/renew',validarJWT,revalidarToken);

module.exports = router;