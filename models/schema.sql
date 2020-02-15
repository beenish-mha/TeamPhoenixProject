DROP DATABASE IF EXISTS mycookbook;
CREATE DATABASE mycookbook;
USE mycookbook;

CREATE TABLE user
(
    id int NOT NULL
    AUTO_INCREMENT,
	email varchar
    (255) NOT NULL,
	password varchar
    (255) NOT NULL ,
	PRIMARY KEY
    (id)
);

    CREATE TABLE recipe
    (
        id int NOT NULL
        AUTO_INCREMENT,
        name varchar
        (255) NOT NULL

);



