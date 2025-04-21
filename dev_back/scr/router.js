const express = require("express");
const cadastroController = require("./controllers/cadastroControllers");

const router = express.Router();

router.get("/cadastros", cadastroController.getAll);
router.post("/cadastrar", cadastroController.sendDados);

module.exports = router;
