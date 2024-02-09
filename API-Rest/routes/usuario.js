const router = require ("express").Router();
const usuarioController = require ("../controllers/usuarioController");
const  {loginRequired} = require("../utils/generateToken")
router
.route("/cadastrar")
.post ((req,res)=> usuarioController.create(req, res));

router
.route('/login')
.post((req,res)=> usuarioController.login(req,res));

router
.route('/usuario/delete')
.delete(loginRequired,(req,res)=> usuarioController.delete(req,res));

router
.route('/usuario/update')
.put(loginRequired,(req,res)=> usuarioController.update(req,res));

module.exports= router;