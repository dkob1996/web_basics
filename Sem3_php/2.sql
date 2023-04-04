-- create
CREATE TABLE EMPLOYEE (
  empId INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  dept TEXT NOT NULL
);

-- insert
INSERT INTO EMPLOYEE (name, dept) VALUES ('Clark', 'Sales');
INSERT INTO EMPLOYEE (name, dept) VALUES ('Dave', 'Accounting');
INSERT INTO EMPLOYEE (name, dept) VALUES ('Ava', 'Sales');
INSERT INTO EMPLOYEE (name, dept) VALUES ('Sergey', 'Sales');
INSERT INTO EMPLOYEE (name, dept) VALUES ('Slava', 'Sales');
INSERT INTO EMPLOYEE (name, dept) VALUES ('Vera', 'Sales');
INSERT INTO EMPLOYEE (name, dept) VALUES ('Natasha', 'Sales');

-- fetch 
SELECT empId AS 'ID', name AS 'first name' 
FROM EMPLOYEE 
WHERE (dept = 'Sales' and empId > 2 AND name LIKE '%a%') 
      OR name ='Dave'
-- ORDER BY name DESC;
-- DESC - это order by в обратном порядке
ORDER BY name;