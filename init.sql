CREATE DATABASE `studentsdb`;
use studentsdb;
CREATE TABLE students(
  `ID` INT PRIMARY KEY,
  `Name` VARCHAR(255) NOT NULL,
  `Age` INT NOT NULL,
  `GPA` DECIMAL(4,2) NOT NULL


  );
  
INSERT INTO students VALUES(22011608, "Toka Mohamed", 19, 3.9);
INSERT INTO students VALUES(22011613, "Shahd Hassan", 21, 2.5);
INSERT INTO students VALUES (22011600, "Alaa Sayed", 20, 3.6);
INSERT INTO students VALUES(22011610, "Mohraeel Hany", 22, 2.8);
INSERT INTO students VALUES(22011611, "Omnya Mohamed", 20, 4.00);

-- SELECT * FROM students;
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '4601';


-- drop database studentsdb;
