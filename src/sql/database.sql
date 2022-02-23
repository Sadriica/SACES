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

CREATE TABLE IF NOT EXISTS formulario (
                          informacion_general TEXT(7000) NOT NULL,
                          informacion_general_archivo BLOB ,
                          informacion_tramite TEXT(7000)  NOT NULL,
                          informacion_tramite_archivo BLOB ,
                          nivel_formacion TEXT(7000) NOT NULL,
                          nivel_formacion_archivo BLOB ,
                          solicitud_registro TEXT(7000) NOT NULL,
                          solicitud_registro_archivo BLOB ,
                          informacion_especif TEXT(7000)  NOT NULL,
                          informacion_especif_archivo BLOB ,
                          creditos_programa TEXT(7000) NOT NULL,
                          creditos_programa_archivo BLOB ,
                          escenarios_practica TEXT(7000) NOT NULL,
                          escenarios_practica_archivo BLOB ,
                          ciclos_propedeuticos TEXT(7000)  NOT NULL,
                          ciclos_propedeuticos_archivo BLOB ,
                          cubrimiento_programa TEXT(7000) NOT NULL,
                          cubrimiento_programa_archivo BLOB ,
                          idiomas TEXT(7000) NOT NULL,
                          idiomas_archivo BLOB ,
                          creacion_programas TEXT(7000) NOT NULL,
                          creacion_programas_archivo BLOB ,
                          contacto_programa TEXT(7000) NOT NULL,
                          contacto_programa_archivo BLOB
);

