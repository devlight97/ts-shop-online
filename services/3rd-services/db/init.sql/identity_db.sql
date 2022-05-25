DROP DATABASE IF EXISTS identity_db;
CREATE DATABASE identity_db;
USE identity_db;

DROP TABLE IF EXISTS users;
CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    phone_number TEXT,
    accession_id INT,
    created_at DATE,
    avatar_img_url TEXT,
    address TEXT,
    google_id TEXT,
    facebook_id TEXT
);

DROP TABLE IF EXISTS user_access_controls;
CREATE TABLE user_access_controls (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name TEXT,
    sale_staff BOOL,
    tele_staff BOOL,
    inventory_staff BOOL,
    profile_setting BOOL,
    admin BOOL,
    master_admin BOOL,
    product_info BOOL,
    streamer BOOL
);