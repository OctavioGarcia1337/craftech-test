SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

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

COMMIT;