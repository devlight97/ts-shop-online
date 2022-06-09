USE product_db;

DROP TABLE IF EXISTS posts;
CREATE TABLE posts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  picture_url TEXT,
  title TEXT,
  content TEXT,
  product_id INT
);