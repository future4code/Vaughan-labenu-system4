CREATE TABLE Turma (
  id VARCHAR(255) PRIMARY KEY,
  nome VARCHAR(255),
  modulo ENUM ('0', '1', '2', '3', '4', '5', '6') DEFAULT '0'
);
CREATE TABLE Estudante (
  id VARCHAR(255) PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  data_nasc DATE NOT NULL,
  turma_id VARCHAR(255),
  FOREIGN KEY (turma_id) REFERENCES Turma(id)
);
CREATE TABLE Docente (
  id VARCHAR(255) PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  data_nasc DATE NOT NULL,
  turma_id VARCHAR(255),
  FOREIGN KEY (turma_id) REFERENCES Turma(id)
);
CREATE TABLE Hobby (
  id VARCHAR(255) PRIMARY KEY,
  nome VARCHAR(255) NOT NULL UNIQUE
);
CREATE TABLE Especialidade (
  id VARCHAR(255) PRIMARY KEY,
  nome VARCHAR(255) NOT NULL UNIQUE
);
CREATE TABLE Estudante_Hobby (
  id VARCHAR(255) PRIMARY KEY,
  estudante_id VARCHAR(255) NOT NULL,
  FOREIGN KEY (estudante_id) REFERENCES Estudante(id),
  hobby_id VARCHAR(255) NOT NULL,
  FOREIGN KEY (hobby_id) REFERENCES Hobby(id)
);
CREATE TABLE Docente_Especialidade (
  id VARCHAR(255) PRIMARY KEY,
  docente_id VARCHAR(255) NOT NULL,
  FOREIGN KEY (docente_id) REFERENCES Docente(id),
  especialidade_id VARCHAR(255) NOT NULL,
  FOREIGN KEY (especialidade_id) REFERENCES Especialidade(id)
);

INSERT INTO `Especialidade` (id, nome)
  VALUES(
    "1",
    "JS"
  );

INSERT INTO `Especialidade` (id, nome)
  VALUES(
    "2",
    "CSS"
  );

INSERT INTO `Especialidade` (id, nome)
  VALUES(
    "3",
    "React"
  );

INSERT INTO `Especialidade` (id, nome)
  VALUES(
    "4",
    "Typescript"
  );

INSERT INTO `Especialidade` (id, nome)
  VALUES(
    "5",
    "POO"
  );

 