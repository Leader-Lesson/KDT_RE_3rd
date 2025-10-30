
-- 데이터베이스 생성 및 사용
CREATE DATABASE IF NOT EXISTS practice_db;
USE practice_db;

-- 사용자 테이블 생성
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100),
    birth_date DATE
);

-- 상품 테이블 생성
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100),
    price DECIMAL(10,2)
);

-- 주문 테이블 생성
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    product_id INT,
    order_status VARCHAR(20),
    created_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- users 데이터 삽입
INSERT INTO users (name, email, birth_date) VALUES
('홍길동', 'hong@example.com', '1990-05-10'),
('김영희', 'kim@example.com', '1985-11-20'),
('이철수', 'lee@example.com', '2000-03-15'),
('박민수', 'park@example.com', '1995-07-30'),
('정은지', 'jeong@example.com', '1993-01-01'),
('한지민', 'han@example.com', '1988-09-14'),
('장동건', 'jang@example.com', '1978-06-25'),
('신세경', 'shin@example.com', '1999-12-05'),
('유재석', 'yoo@example.com', '1972-08-14'),
('강호동', 'kang@example.com', '1970-06-11');

-- products 데이터 삽입
INSERT INTO products (product_name, price) VALUES
('노트북', 1299000),
('무선 마우스', 29900),
('기계식 키보드', 89000),
('게이밍 모니터', 279000),
('USB-C 허브', 45900),
('무선 이어폰', 159000),
('웹캠 HD', 69000),
('외장 하드 1TB', 109000),
('SSD 512GB', 139000),
('데스크탑 PC', 1590000);

-- orders 데이터 삽입
INSERT INTO orders (user_id, product_id, order_status, created_at) VALUES
(1, 1, '배송완료', '2025-03-20 10:00:00'),
(2, 2, '주문취소', '2025-03-21 15:30:00'),
(3, 3, '배송중', '2025-03-22 09:00:00'),
(4, 4, '배송완료', '2025-03-25 14:20:00'),
(5, 5, '결제완료', '2025-03-24 11:45:00'),
(6, 6, '배송완료', '2025-03-23 08:15:00'),
(7, 7, '결제완료', '2025-03-21 13:00:00'),
(8, 8, '배송중', '2025-03-22 10:30:00'),
(9, 9, '배송완료', '2025-03-20 17:45:00'),
(10, 10, '주문취소', '2025-03-19 19:25:00');
