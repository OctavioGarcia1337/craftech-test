CREATE DATABASE IF NOT EXISTS viernes_audios;

USE viernes_audios;

CREATE TABLE audio (
    id_audio INT UNSIGNED NOT NULL AUTO_INCREMENT,
    youtube_id VARCHAR(100) NOT NULL,
    PRIMARY KEY(id_audio)
);

INSERT INTO audio (youtube_id)
VALUES 
("XMpYGx8xBl0");