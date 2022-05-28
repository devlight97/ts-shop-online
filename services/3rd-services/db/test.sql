USE product_db;

DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  total_price INT,
  address TEXT,
  state TEXT,
  created_at DATE,
  created_by INT
);