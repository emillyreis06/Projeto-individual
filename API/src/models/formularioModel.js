var database = require("../database/config")


// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function treino( faixaEtaria, genero, pratica, ativFisica, frequencia, treinoPref,obj, fkUsuario ) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", faixaEtaria,  genero, pratica, ativFisica, frequencia, treinoPref,obj, fkUsuario );
    var instrucaoSql = `
        INSERT INTO formulario (faixa_etaria, genero, pratica_ativFisica, qual_ativFisica, frequencia, treino_preferido, obj, fkUsuario )
        VALUES ("${faixaEtaria}", "${genero}","${pratica}",  "${ativFisica}", "${frequencia}", "${treinoPref}", "${obj}", ${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    treino
};