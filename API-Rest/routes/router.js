const router = require("express").Router();


const contatoRouter = require("./contato");

router.use("/", contatoRouter);

module.exports = router;