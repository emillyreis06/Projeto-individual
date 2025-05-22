var dashboardModel = require("../models/dashboardModel");

function obterTotalRespostas(req, res) {
    dashboardModel.obterTotalRespostas()
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o total de respostas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function obterTotalAtiv(req, res) {
    dashboardModel.obterTotalAtiv()
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o total de pessoas que praticam atividade física ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function obterObjetivoComum(req, res) {
    dashboardModel.obterObjetivoComum()
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o objetivo mais comum ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function obterGenero(req, res) {
    dashboardModel.obterGenero()
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar genêro ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function obterFaixaEtaria(req, res) {
    dashboardModel.obterFaixaEtaria()
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a faixa etária", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    obterTotalRespostas,
    obterTotalAtiv,
    obterObjetivoComum,
    obterGenero,
    obterFaixaEtaria
}