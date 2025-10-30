DROP DATABASE IF EXISTS codingon_db;
CREATE DATABASE codingon_db DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE codingon_db;

-- 클래스(강의반) 테이블
CREATE TABLE class (
  class_id    CHAR(5) NOT NULL PRIMARY KEY,
  class_name  VARCHAR(30) NOT NULL,
  category    VARCHAR(20),
  start_date  DATE
);

-- 수강생 테이블
CREATE TABLE student (
  student_id  INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name        VARCHAR(20) NOT NULL,
  age         INT,
  class_id    CHAR(5) NOT NULL,
  join_date   DATE,
  FOREIGN KEY (class_id) REFERENCES class(class_id)
);

-- 클래스 샘플 데이터 5개
INSERT INTO class VALUES ('CLS01', '프론트엔드 12기', '프론트엔드', '2024-01-08');
INSERT INTO class VALUES ('CLS02', '백엔드 8기', '백엔드', '2024-02-05');
INSERT INTO class VALUES ('CLS03', 'AI 엔지니어 3기', 'AI', '2024-03-01');
INSERT INTO class VALUES ('CLS04', '모바일 앱 개발 5기', '모바일', '2024-04-10');
INSERT INTO class VALUES ('CLS05', 'UI/UX 디자인 6기', '디자인', '2024-05-15');

-- 수강생 샘플 데이터 10명
INSERT INTO student (name, age, class_id, join_date) VALUES ('김민수', 25, 'CLS01', '2024-01-10');
INSERT INTO student (name, age, class_id, join_date) VALUES ('이수정', 27, 'CLS01', '2024-01-12');
INSERT INTO student (name, age, class_id, join_date) VALUES ('박준형', 24, 'CLS02', '2024-02-06');
INSERT INTO student (name, age, class_id, join_date) VALUES ('정유진', 23, 'CLS02', '2024-02-10');
INSERT INTO student (name, age, class_id, join_date) VALUES ('오세훈', 28, 'CLS03', '2024-03-03');
INSERT INTO student (name, age, class_id, join_date) VALUES ('조윤아', 22, 'CLS03', '2024-03-05');
INSERT INTO student (name, age, class_id, join_date) VALUES ('한지민', 26, 'CLS04', '2024-04-12');
INSERT INTO student (name, age, class_id, join_date) VALUES ('임동혁', 29, 'CLS04', '2024-04-15');
INSERT INTO student (name, age, class_id, join_date) VALUES ('배수지', 21, 'CLS05', '2024-05-17');
INSERT INTO student (name, age, class_id, join_date) VALUES ('전지현', 30, 'CLS05', '2024-05-20');
