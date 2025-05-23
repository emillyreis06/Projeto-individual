var database = require("../database/config")


//total de respostas do formulario
function obterTotalRespostas() {
    var instrucaoSql = `
        SELECT  COUNT(*) AS 'Total_de_Respostas' FROM formulario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

//total que praticam ativ física
function obterTotalAtiv() {
    var instrucaoSql = `
        SELECT COUNT(*)  AS 'praticam_atividadeFisica' FROM formulario WHERE  pratica_ativFisica = 'Sim';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

//obj comum
 function obterObjetivoComum() {
     var instrucaoSql = `
         SELECT obj, COUNT(*) AS quantidade
FROM formulario
GROUP BY obj
HAVING COUNT(*) = (
    SELECT MAX(contagem) FROM (
        SELECT COUNT(*) AS contagem
        FROM formulario
        GROUP BY obj
    ) AS contagens
);`;
     console.log("Executando a instrução SQL: \n" + instrucaoSql);
     return database.executar(instrucaoSql);
 }

//exibir quantidade de pessoas por genero
function obterGenero() {
    var instrucaoSql = `
    SELECT genero, count(*) AS 'contagem'
    FROM formulario
    WHERE pratica_ativFisica = 'Sim'
    GROUP BY genero;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

//faixa etaria
function obterFaixaEtaria() {
    var instrucaoSql = `
    SELECT faixa_etaria, COUNT(*) as 'quantidade'
    FROM formulario
    WHERE pratica_ativFisica = 'Sim'
    GROUP BY faixa_etaria
    order by faixa_etaria;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}





module.exports = {
    obterTotalRespostas,
    obterTotalAtiv,
    obterObjetivoComum,
    obterGenero,
    obterFaixaEtaria
};