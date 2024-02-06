const router = require("express").Router();
const contatoRouter = require("./contato");
const usuarioRouter = require("./usuario");

router.use("/", contatoRouter);
router.use("/",usuarioRouter);
module.exports = router;