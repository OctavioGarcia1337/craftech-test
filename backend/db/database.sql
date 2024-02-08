CREATE DATABASE IF NOT EXISTS viernes_audios;

USE viernes_audios;

CREATE TABLE audio (
    id_audio INT UNSIGNED NOT NULL AUTO_INCREMENT,
    youtube_id VARCHAR(100) NOT NULL,
    PRIMARY KEY(id_audio)
);

INSERT INTO audio (youtube_id)
VALUES 
("XMpYGx8xBl0"), 
("IquqMSnTowM"), 
("ObfD9Xil5dE"), 
("1TewCPi92ro"), 
("PPzIWFJU_3s"), 
("Vi5OQ4L-W4k");

INSERT INTO audio (youtube_id)
VALUES 
("ERROR-00001"),
("ERROR-00002"),
("ERROR-00003"),
("ERROR-00004"),
("ERROR-00005"),
("ERROR-00006");