const router = require("express").Router();
const {authMiddleware} = require("../utils/generateToken");
const contatoController = require("../controllers/contatoController");

router
.route("/contato")
.post (authMiddleware,(req,res)=> contatoController.create(req, res));

router
.route("/contatos")
.get(authMiddleware,(req,res)=> contatoController.getAll(req,res));

router
.route("/contato")
.get(authMiddleware,(req,res)=> contatoController.get(req,res));

router
.route("/contato/:id")
.delete(authMiddleware,(req,res)=> contatoController.delete(req, res));

router
.route("/contato/:id")
.put(authMiddleware,(req,res)=> contatoController.update(req,res));

module.exports = router;
