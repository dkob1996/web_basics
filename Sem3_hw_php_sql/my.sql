
-- create
CREATE TABLE SCHOOLMATES (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  adress TEXT NOT NULL
  
);

-- insert
INSERT INTO SCHOOLMATES (name, age, adress) VALUES ('Clark', 22, 'Moscow');
INSERT INTO SCHOOLMATES (name, age, adress) VALUES ('Kate', 21, 'Wales');
INSERT INTO SCHOOLMATES (name, age, adress) VALUES ('Mitch', 24, 'Wales');
INSERT INTO SCHOOLMATES (name, age, adress) VALUES ('Steve', 17, 'Moscow');
INSERT INTO SCHOOLMATES (name, age, adress) VALUES ('Rob', 18, 'Wales');
INSERT INTO SCHOOLMATES (name, age, adress) VALUES ('Bob', 32, 'North Wales');
INSERT INTO SCHOOLMATES (name, age, adress) VALUES ('Mark', 23, 'Moscow');
INSERT INTO SCHOOLMATES (name, age, adress) VALUES ('Maks', 32, 'Moscow');
INSERT INTO SCHOOLMATES (name, age, adress) VALUES ('Dex', 25, 'South Wales');
INSERT INTO SCHOOLMATES (name, age, adress) VALUES ('John', 22, 'Moscow');

-- fetch 
SELECT name AS 'Name' 
FROM SCHOOLMATES
WHERE adress = 'Moscow' AND (age >= 18 AND age < 30);