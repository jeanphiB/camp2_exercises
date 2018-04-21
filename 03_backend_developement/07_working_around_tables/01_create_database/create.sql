DROP TABLE "public"."job_history";
DROP TABLE "public"."employee";
DROP TABLE "public"."department";
DROP TABLE "public"."job_grade";
DROP TABLE "public"."job";
DROP TABLE "public"."location";
DROP TABLE "public"."country";
DROP TABLE "public"."region";

CREATE TABLE region (
  id serial PRIMARY KEY,
  name varchar(100)
);

COPY region FROM '/Users/Jean-Philippe/workspace/camp2_exercises/03_backend_developement/07_working_around_tables/01_create_database/human_resource/regions.csv' WITH (FORMAT csv, HEADER true);

CREATE TABLE country (
  id serial PRIMARY KEY,
  code varchar(2),
  name varchar(100),
  region_id integer references region(id)
);

COPY country FROM '/Users/Jean-Philippe/workspace/camp2_exercises/03_backend_developement/07_working_around_tables/01_create_database/human_resource/countries.csv' WITH (FORMAT csv, HEADER true);

CREATE TABLE location (
  id serial PRIMARY KEY,
  street_address varchar(100),
  postal_code varchar(10),
  city varchar(50),
  state varchar(20),
  country_id integer references country(id)
);

COPY location FROM '/Users/Jean-Philippe/workspace/camp2_exercises/03_backend_developement/07_working_around_tables/01_create_database/human_resource/locations.csv' WITH (FORMAT csv, HEADER true);

CREATE TABLE job (
  id serial PRIMARY KEY,
  code varchar(10),
  title varchar(100),
  min_salary numeric(6, 1),
  max_salary numeric(6, 1)
);

COPY job FROM '/Users/Jean-Philippe/workspace/camp2_exercises/03_backend_developement/07_working_around_tables/01_create_database/human_resource/jobs.csv' WITH (FORMAT csv, HEADER true);

CREATE TABLE job_grade (
  id serial PRIMARY KEY,
  level char(1),
  lowest_salary numeric(6, 1),
  highest_salary numeric(6, 1)
);

COPY job_grade FROM '/Users/Jean-Philippe/workspace/camp2_exercises/03_backend_developement/07_working_around_tables/01_create_database/human_resource/job_grades.csv' WITH (FORMAT csv, HEADER true);

CREATE TABLE department (
  id serial PRIMARY KEY,
  name varchar(50),
  manager_id integer,
  location_id integer references location(id)
);

COPY department FROM '/Users/Jean-Philippe/workspace/camp2_exercises/03_backend_developement/07_working_around_tables/01_create_database/human_resource/departments.csv' WITH (FORMAT csv, HEADER true);

CREATE TABLE employee (
  id serial PRIMARY KEY,
  first_name varchar(50),
  last_name varchar(50),
  email varchar(50),
  phone_number varchar(20),
  hire_date date,
  job_id integer references job(id),
  salary numeric(6, 1),
  commission_pct numeric(3, 2),
  manager_id integer references employee(id),
  department_id integer references department(id)
);

COPY employee FROM '/Users/Jean-Philippe/workspace/camp2_exercises/03_backend_developement/07_working_around_tables/01_create_database/human_resource/employees.csv' WITH (FORMAT csv, HEADER true);

CREATE TABLE job_history (
  id serial PRIMARY KEY,
  employee_id integer references employee(id),
  start_date date,
  end_date date,
  job_id integer references job(id),
  department_id integer references department(id)
);

COPY job_history FROM '/Users/Jean-Philippe/workspace/camp2_exercises/03_backend_developement/07_working_around_tables/01_create_database/human_resource/job_history.csv' WITH (FORMAT csv, HEADER true);

INSERT INTO job_history
 (id, employee_id, start_date, end_date, job_id, department_id)
 VALUES (11, 1, '2005-03-16', null, 1, 11);
