CREATE SCHEMA IF NOT EXISTS saces;

USE saces;

CREATE TABLE IF NOT EXISTS proyectos(
id_proyecto INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nombre VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS usuarios(
id_usuario INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nombre VARCHAR(255),
rol ENUM('ADMIN','EDITOR','VERIFICADOR'),
fk_proyecto INT NOT NULL,
FOREIGN KEY (fk_proyecto) 
REFERENCES proyectos(id_proyecto)
);

