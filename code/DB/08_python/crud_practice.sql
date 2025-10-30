CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    author VARCHAR(50) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 예시 데이터 1
INSERT INTO posts (author, content, created_at) 
VALUES (
    '김코딩', 
    '파이썬이랑 MySQL 연동 드디어 성공! 재밌다.', 
    '2025-10-27 09:30:15'
);

-- 예시 데이터 2
INSERT INTO posts (author, content, created_at) 
VALUES (
    '이개발', 
    '방명록 만들기 실습 중입니다. 다들 화이팅!', 
    '2025-10-28 11:10:00'
);

-- 예시 데이터 3
INSERT INTO posts (author, content, created_at) 
VALUES (
    '박서버', 
    'CRUD는 백엔드의 기본이죠. 기본기가 중요합니다.', 
    '2025-10-28 14:05:20'
);

-- 예시 데이터 4
INSERT INTO posts (author, content, created_at) 
VALUES (
    '김코딩', 
    '두 번째 글입니다. 이제 글 목록 불러오기 해봐야지.', 
    '2025-10-29 10:00:00'
);

-- 예시 데이터 5 (가장 최신 글)
INSERT INTO posts (author, content, created_at) 
VALUES (
    '최데이터', 
    'SELECT 쿼리가 제일 헷갈리는 것 같아요. 연습만이 살길!', 
    '2025-10-29 11:25:30'
);