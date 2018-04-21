CREATE TABLE my_shop (
  id UUID CONSTRAINT id_key PRIMARY KEY,
  client_name varchar(100),
  euros_spent integer,
  fidelity_points_earned integer,
  purchase_date timestamp,
  number_of_items varchar(1)
);

COPY my_shop FROM '/Users/Jean-Philippe/workspace/camp2_exercises/03_backend_developement/06_data_modeling_And_databases/02_fidelity_points/data_all.csv' WITH (FORMAT csv);

/* Find the three oldest client's name */
SELECT client_name FROM my_shop ORDER BY purchase_date LIMIT 3;

/* Find all clients that have not made a purchase in the last two months */
SELECT client_name, purchase_date FROM my_shop
WHERE purchase_date < (SELECT MAX(purchase_date) FROM my_shop) - interval '1 month' * 2;

/*Find all clients that have not made a purchase in the last month but are big customer (have purchased more than 3 items in one purchase previously)*/
SELECT client_name, purchase_date FROM my_shop
WHERE purchase_date < (SELECT MAX(purchase_date) FROM my_shop) - interval '1 month' * 2
 AND id IN (SELECT id FROM my_shop WHERE number_of_items > '3');

/*Find the best client (the one who spent the most money in one purchase)*/
SELECT client_name, euros_spent FROM my_shop
ORDER BY euros_spent DESC LIMIT 1;

/*BONUS, find how much money our store made in the summer*/
SELECT SUM(euros_spent) FROM my_shop WHERE purchase_date BETWEEN '2017-06-21' AND '2017-09-23'
