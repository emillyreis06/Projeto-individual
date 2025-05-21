var express = require("express");
var router = express.Router();
var dashboardController = require("../controllers/dashboardController");


// rota para Total de respostas
router.get("/totalResp", function (req, res) {
  dashboardController.obterTotalRespostas(req, res);
});


// rota para Total que praticam atividade física
router.get("/totalAtiv", function (req, res) {
  dashboardController.obterTotalAtiv(req, res);
});

// rota para Objetivo mais comum
router.get("/ObjetivoComum", function (req, res) {
  dashboardController.obterObjetivoComum(req, res);
});


module.exports = router;