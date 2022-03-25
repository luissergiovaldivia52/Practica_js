CREATE TABLE person (
person_id BIGINT NOT NULL,
last_name VARCHAR(255) NOT NULL,
first_name VARCHAR(255),
age INT NOT NULL,
PRIMARY KEY (person_id)
);

CREATE TABLE people_over_30 AS SELECT * FROM person WHERE age > 30;


CREATE TABLE user_table
(
id serial NOT NULL,
username CHARACTER VARYING,
pass CHARACTER VARYING,
first_name CHARACTER varying(30),
last_name CHARACTER varying(30),
CONSTRAINT user_table_pkey PRIMARY KEY (id)
);

 CREATE TABLE t_test (
a int,
b int,
c int GENERATED ALWAYS AS (a * b) STORED
);

 INSERT INTO t_test (a, b) VALUES (10, 20);

 SELECT * FROM t_test;

ALTER TABLE t_test ALTER COLUMN c DROP EXPRESSION ;



CREATE TABLE tab (a int, b int);

INSERT INTO tab SELECT id, 1 FROM generate_series(1, 5000000) AS id;

SELECT now(), now();















