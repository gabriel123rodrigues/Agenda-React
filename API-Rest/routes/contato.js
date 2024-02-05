const router = require("express").Router();

const contatoController = require("../controllers/contatoController");

router
.route("/contato")
.post ((req,res)=> contatoController.create(req, res));

router
.route("/contato")
.get((req,res)=> contatoController.getAll(req,res));

router
.route("/contato/:id")
.get((req,res)=> contatoController.get(req,res));

router
.route("/contato/:id")
.delete((req,res)=> contatoController.delete(req, res));

router
.route("/contato/:id")
.put((req,res)=> contatoController.update(req,res));

module.exports = router;
