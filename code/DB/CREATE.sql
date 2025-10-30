-- 1. CREATE 
CREATE DATABASE test_db;
DROP DATABASE test_db;

-- 인코딩 지정
CREATE DATABASE test_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

SHOW DATABASES;
USE test_db;

CREATE TABLE user (
	user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(10) NOT NULL,
    address VARCHAR(45),
    join_date DATE
);
SHOW TABLES;
DESC user;

DROP TABLE user;
