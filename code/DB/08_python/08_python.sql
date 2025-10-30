-- 아무 DB나 users 없는 곳에다 하면 될듯함 없으면 아래로
create database codingon default character set utf8 default collate utf8_general_ci;

CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

select * from mysql.user;
show grants;
create user 'user'@'localhost' identified by '1234';

INSERT INTO users (username, password, name, email) VALUES
('kimminsu', 'pass1234', '김민수', 'kim.minsu@example.com'),
('leeyuna', 'pw9876', '이유나', 'lee.yuna@example.com'),
('parkjunho', 'secure11', '박준호', 'park.junho@example.com'),
('choijiae', 'mypw2025', '최지애', 'choi.jiae@example.com'),
('jungtaehyun', 'abcd1234', '정태현', 'jung.taehyun@example.com'),
('kangsoyeon', 'test5678', '강소연', 'kang.soyeon@example.com'),
('yoonhyukjin', 'pw1122', '윤혁진', 'yoon.hyukjin@example.com'),
('hanseojin', 'hello88', '한서진', 'han.seojin@example.com'),
('songyujin', 'pw9090', '송유진', 'song.yujin@example.com'),
('limdaewon', 'qwerty55', '임대원', 'lim.daewon@example.com');
