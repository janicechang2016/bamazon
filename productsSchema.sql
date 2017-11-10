DROP DATABASE IF EXISTS bamazon;
--create bamazon db
CREATE DATABASE bamazon;

--all of the following code will affect bamazon--
USE bamazon;

--create the table called "products" within bamazon--
CREATE TABLE products (
  item_id INTEGER AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER(100) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gummy Vitamins", "Health & Fitness", 10.79, 66);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coffee Table Set", "Home Decor", 69.51, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dead Sea Mud Mask", "Beauty", 11.21, 13);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wireless Bluetooth Headset", "Technology", 14.99, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sunglasses", "Accessories", 125.00, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Disco Ball", "Home Decor", 34.99, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("USB Cable", "Technology", 10.49, 44);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sweater", "Clothing", 49.99, 57);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Money Clip", "Accessories", 21.00, 21);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Essential Oil Diffuser", "Health & Fitness", 17.95, 10);