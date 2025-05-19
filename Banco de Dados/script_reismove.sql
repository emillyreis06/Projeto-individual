create database reismove;
use reismove;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar (45),
email varchar (100),
senha varchar (15),
confirmarSenha varchar (15)
);



create table formulario (
idFormulario int primary key auto_increment,
faixa_etaria char (10),
constraint chkEtaria check (faixa_etaria in ("15-20","20-25","25-30","30-35", "40+")),
genero char (15),
constraint chkGenero check (genero in ("Feminino","Masculino")),
pratica_ativFisica varchar (6),
constraint chkPratica check (pratica_ativFisica in ("Sim","Não")),
qual_ativFisica varchar (20),
constraint chkQual check (qual_ativFisica in ("Musculação","Crossfit","Esporte","Outro")),
frequencia varchar (45),
constraint chkFreq  check ( frequencia in ("1 a 3 vezes por semana", "4 a 6 vezes por semana","Todos os dias da semana","Não prático")),
treino_preferido varchar (45),
constraint  chkTreino check (treino_preferido in ("Treino de posterior", "Treino de quadríceps", "Treino de costas","Treino de bíceps/tríceps", "Treino de ombro")),
obj varchar (45),
constraint chkObj check (obj in ("Ganhar massa magra", "Emagrecer", "Bem estar físico e mental", "Saúde", "Estética", "Outro")),
fkUsuario int,
constraint fkFormUser foreign key (fkUsuario) references usuario (idUsuario)
);

select * from usuario;
select * from formulario ;