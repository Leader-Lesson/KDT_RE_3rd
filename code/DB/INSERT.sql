USE my_shop;

DESC customer;

-- INSERT
INSERT INTO customer (cust_id, cust_name, address, phone, birth)
VALUES ("C001", "김민수", "서울시", "01012345678", "1990-05-14");

INSERT INTO customer 
VALUES ("C002", "이영희", "부산시", "01023456789", "1985-08-22");

INSERT INTO customer VALUES
("C003", "박철수", "대전시", "01012345678", "1999-01-01"),
("C004", "정유진", "광주시", "01012341234", "2002-01-01");

DESC orders;
INSERT INTO orders (cust_id, prod_name, price, amount) VALUES 
("C003", "김치찌개", 10000, 15),
("C004", "마라탕", 30000, 15);






