const router = require("express").Router();
const contatoRouter = require("./contato");
const usuarioRouter = require("./usuario");
const fotoRouter = require("./foto");

router.use("/", contatoRouter);
router.use("/",usuarioRouter);
router.use("/",fotoRouter);
module.exports = router;