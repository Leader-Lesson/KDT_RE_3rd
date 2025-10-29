DROP DATABASE IF EXISTS university_db;
CREATE DATABASE university_db
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE university_db;

CREATE TABLE students (
	student_id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    major VARCHAR(30),
    advisor_id INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE professors (
	professor_id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    department VARCHAR(30),
    mentee_id INT,
    joined_at DATE
);

ALTER TABLE students
ADD
CONSTRAINT fk_advisor
FOREIGN KEY (advisor_id)
REFERENCES professors(professor_id)
ON DELETE SET NULL;

ALTER TABLE professors
ADD
CONSTRAINT fk_mentee
FOREIGN KEY (mentee_id)
REFERENCES students(student_id)
ON DELETE SET NULL;
-- on delete, update의 기본값 : restrict
-- on update restrict