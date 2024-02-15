const router = require("express").Router();
const fotoController = require ("../controllers/fotoController");
const {authMiddleware} = require("../utils/generateToken")


router
.route('/fotos')
.post(authMiddleware,(req,res)=> fotoController.create(req, res));

router
.route('/foto/delete/:id')
.delete(authMiddleware,(req,res)=> fotoController.delete(req,res));

router
.route("/foto/:id")
.get(authMiddleware,(req,res)=> fotoController.get(req,res));

module.exports = router;