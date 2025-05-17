-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database reismove;
use reismove;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar (45),
email varchar (100),
senha varchar (15),
confimarSenha varchar (15)
);



create table formulario (
idFormulario int primary key auto_increment,
faixa_etaria char (10),
constraint chkEtaria check (faixa_etaria in ("15-20","20-25","25-30","30-35", "40+")),
genero char (15),
constraint chkGenero check (genero in ("feminino","masculino")),
pratica_ativFisica char (5),
constraint chkPratica check (pratica_ativFisica in ("Musculação","Crossfit","Esporte","Outro")),
qual_ativFisica varchar (45),
constraint chkQual check (qual_ativFisica in ("sim","não")),
frequencia varchar (45),
constraint chkFreq  check ( frequencia in ("1 a 3 vezes por semana", "4 a 6 vezes por semana","todos os dias da semana","não prático")),
treino_preferido varchar (45),
constraint  chkTreino check (treino_preferido in ("Treino de posterior", "Treino de quadríceps", "Treino de costas","Treino de bíceps/tríceps", "Treino de ombro")),
porque varchar (45),
constraint chkPq check (porque in ("Ganhar massa magra", "emagrecer", "bem estar físico e mental", "saúde", "estética", "outro"))
);
