

function treino(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var faixaEtaria = req.body.faixaEtariaServer;
    var pratica = req.body.praticaServer;
    var genero = req.body.generoServer;
    var ativFisica = req.body.ativFisicaServer;
    var frequencia = req.body.frequenciaServer;
    var treinoPref = req.body.treinoPrefServer;
    var obj = req.body.objServer;

    

    // Faça as validações dos valores
    if (faixaEtaria== undefined) {
        res.status(400).send("Faixa etária indefinida");
    } else if (pratica == undefined) {
        res.status(400).send("Campo para validar se pratica atividade física indefinido");
    } else if (genero == undefined) {
        res.status(400).send("Genêro indefinido");
    } else if (ativFisica == undefined) {
        res.status(400).send("Qual atividade física você prática esta indefinido");
    } else if (frequencia == undefined) {
        res.status(400).send("Sua frequência esta indefinida");
    } else if (treinoPref == undefined) {
        res.status(400).send("Seu treino preferido esta indefinido");
    } else if (obj == undefined) {
        res.status(400).send("Seu objetivo esta indefinido");
    } else {

    

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        formularioModel.treino( faixaEtaria,pratica, genero, ativFisica, frequencia,treinoPref,obj)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar seu treino personalizado! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    treino
}