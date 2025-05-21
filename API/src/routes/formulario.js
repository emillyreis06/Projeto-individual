var express = require("express");
var router = express.Router();

var formularioController = require("../controllers/formularioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/gerarTreino", function (req, res) {
    formularioController.treino(req, res);
})

module.exports = router;