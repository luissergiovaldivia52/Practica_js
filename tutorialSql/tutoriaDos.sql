CREATE TABLE weather (
	city varchar(80),
	temp_lo int , -- low temperature
	temp_hi int,	-- high temperature
	prcp real,		-- precipitacion
	date date
);

CREATE TABLE cities(
	name varchar(80),
	location point
);

INSERT INTO weather VALUES ('San Francisco', 46, 50, 0.25, '1994-11-27');

INSERT INTO cities VALUES ('San Francisco', '(-194.0, 53.0)');

INSERT INTO weather (city, temp_lo, temp_hi, prcp, date)
	VALUES ('San Francisco', 43, 57, 0.0, '1994-11-29');

INSERT INTO weather (city, temp_lo, temp_hi, date)
	VALUES ('Hayward', 37, 54,'1994-11-29');

SELECT * FROM weather;

SELECT city, temp_lo, temp_hi, prcp, date FROM weather;

SELECT city, (temp_hi + temp_lo)/2 AS temp_avg FROM weather;

SELECT * FROM weather
WHERE city = 'San Francisco' AND prcp > 0.0;

SELECT * FROM weather
ORDER BY city;

SELECT * FROM weather
ORDER BY city, temp_lo;

SELECT DISTINCT city
FROM weather;

SELECT DISTINCT city
FROM weather
ORDER BY city;

SELECT *
FROM weather, cities
WHERE city = name;

SELECT weather.city, weather.temp_lo, weather.temp_hi,
weather.prcp, weather.date, cities.location
FROM weather, cities
WHERE cities.name = weather.city;

SELECT *
	FROM weather INNER JOIN cities ON (weather.city = cities.name);

SELECT *
FROM weather LEFT OUTER JOIN cities ON (
	weather.city = cities.name);

DELETE FROM weather WHERE city = 'San Fancisco';
