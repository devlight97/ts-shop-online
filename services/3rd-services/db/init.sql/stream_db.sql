DROP DATABASE IF EXISTS stream_db;
CREATE DATABASE stream_db;
use stream_db;
DROP TABLE IF EXISTS video_streams;
CREATE TABLE video_streams (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title TEXT,
    chat_box INT,
    created_by INT,
    started_at DATE,
    finished_at DATE
);
DROP TABLE IF EXISTS chat_boxs;
CREATE TABLE chat_boxs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ref_id INT,
    type TEXT,
    created_at DATE,
    created_by INT
);

DROP TABLE IF EXISTS messages;
CREATE TABLE messages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    chat_box_id INT,
    sender_id INT,
    receiver_id INT,
    content TEXT,
    created_at DATE
);