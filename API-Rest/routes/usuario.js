const router = require ("express").Router();
const usuarioController = require ("../controllers/usuarioController");

router
.route("/cadastrar")
.post ((req,res)=> usuarioController.create(req, res));

router
.route('/login')
.post((req,res)=> usuarioController.login(req,res));

module.exports= router;