// el * indica que traiga todas las columas disponibles

SELECT *
FROM dogs;

SELECT *
FROM temperaments;


// ORDER BY CLAUSE

SELECT * FROM dogs
ORDER BY name, id DESC;

// WHERE CLAUSE

SELECT * FROM dogs
WHERE name = 'pekines'
AND height = '10';

SELECT name, weight FROM dogs GROUP BY name;

SELECT NAME, SUM(WEIGHT) FROM DOGS GROUP BY NAME;


SELECT dogs.name FROM dogs
INNER JOIN temperaments
ON dogs.id = temperaments.id;

