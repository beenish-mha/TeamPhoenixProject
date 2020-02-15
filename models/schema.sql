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
        (255) NOT NULL,
        method text
        NOT NULL,
        image text
        DEFAULT 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        FOREIGN KEY userid int NOT NULL
        PRIMARY KEY
        (id)
    );



