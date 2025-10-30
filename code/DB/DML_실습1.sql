DROP DATABASE IF EXISTS codingon_db;
CREATE DATABASE codingon_db 
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE codingon_db;

CREATE TABLE class (
	class_id    CHAR(5) NOT NULL PRIMARY KEY,
    class_name  VARCHAR(30) NOT NULL,
    category    VARCHAR(20),
    start_date  DATE,
	room        CHAR(5) NOT NULL
);

CREATE TABLE student (
	student_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name       VARCHAR(20) NOT NULL,
    age        INT,
    gender     ENUM('남', '여'),
    class_id   CHAR(5) NOT NULL,
    join_date  DATE,
    
    CONSTRAINT class_fk
    FOREIGN KEY (class_id) 
    REFERENCES class(class_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

INSERT INTO class VALUES
('CLS01', '프론트엔드 12기', '프론트엔드', '2024-01-08', 'B-101'),
('CLS02', '백엔드 8기', '백엔드', '2024-02-05', 'B-102'),
('CLS03', 'AI 엔지니어 3기', 'AI', '2024-03-01', 'C-201'),
('CLS04', '모바일 앱 개발 5기', '모바일', '2024-04-10', 'A-301'),
('CLS05', 'UI/UX 디자인 6기', '디자인', '2024-05-15', 'D-401'),
('CLS06', '데이터 분석 2기', '데이터분석', '2024-06-03', 'B-201'),
('CLS07', '클라우드 인프라 1기', '클라우드', '2024-06-24', 'E-102'),
('CLS08', '게임 프로그래밍 4기', '게임개발', '2024-07-15', 'G-301');

INSERT INTO student (name, age, gender, class_id, join_date) VALUES
('정국', 25, '남', 'CLS01', '2024-01-08'),
('장원영', 21, '여', 'CLS01', '2024-01-09'),
('변우석', NULL, '남', 'CLS02', '2024-02-05'),
('고윤정', 24, '여', 'CLS02', '2024-02-06'),
('안유진', 23, '여', 'CLS03', '2024-03-01'),
('이도현', 26, '남', 'CLS03', '2024-03-02'),
('박채영', NULL, '여', 'CLS04', '2024-04-10'),
('박보검', 29, '남', 'CLS04', '2024-04-11'),
('이지은', NULL, '여', 'CLS05', '2024-05-15'),
('오해원', 22, '여', 'CLS05', '2024-05-16');

DESC class;
DESC student;







