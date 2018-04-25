CREATE TABLE brands (
  id uuid PRIMARY KEY,
  title varchar(100)
);

CREATE TABLE categories (
  id uuid PRIMARY KEY,
  decathlon_id integer,
  label varchar(100)
);

CREATE TABLE products_categories (
  product_id uuid,
  category_id uuid
);

CREATE TABLE products (
  id uuid PRIMARY KEY,
  decathlon_id integer,
  title varchar(100),
  description text,
  brand_id uuid,
  min_price numeric(10, 2),
  max_price numeric(10, 2),
  crossed_price numeric(10, 2),
  percent_reduction smallint,
  image_path varchar(100),
  rating numeric(2, 1)
);
