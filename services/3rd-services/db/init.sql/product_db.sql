DROP DATABASE IF EXISTS product_db;
CREATE DATABASE product_db;
USE product_db;
DROP TABLE IF EXISTS products;
CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name TEXT,
  brief TEXT,
  quantity INT,
  price INT,
  picture_url TEXT,
  brand TEXT,
  created_at DATE,
  created_by INT,
  updated_at INT,
  updated_by INT
);
DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  total_price INT,
  address TEXT,
  state TEXT,
  created_at DATE,
  created_by INT
);
DROP TABLE IF EXISTS order_details;
CREATE TABLE order_details (
  id INT PRIMARY KEY AUTO_INCREMENT,
  product_id INT,
  order_id INT,
  product_quantity INT,
  total_price INT
);
DROP TABLE IF EXISTS product_fields;
CREATE TABLE product_fields (
  id INT PRIMARY KEY AUTO_INCREMENT,
  product_id int,
  name TEXT,
  value TEXT,
  type TEXT
);
DROP TABLE IF EXISTS posts;
CREATE TABLE posts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title TEXT,
  picture_url TEXT,
  content TEXT,
  product_id INT
);
DROP TABLE IF EXISTS pictures;
CREATE TABLE pictures (
  id INT PRIMARY KEY AUTO_INCREMENT,
  ref_id int,
  url TEXT
);