const router = require("express").Router();
const fotoController = require ("../controllers/fotoController");



router
.route('/fotos')
.post((req,res)=> fotoController.create(req, res));

module.exports = router;