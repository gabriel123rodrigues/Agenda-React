const router = require ("express").Router();
const usuarioController = require ("../controllers/usuarioController");
const  {loginRequired} = require("../utils/generateToken")
router
.route("/cadastrar")
.post ((req,res)=> usuarioController.create(req, res));

router
.route('/login')
.post(loginRequired,(req,res)=> usuarioController.login(req,res));
router
.route('/login/delete')
.delete(loginRequired,(req,res)=> usuarioController.delete(req,res));

module.exports= router;