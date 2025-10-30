USE codingon_store_db;

SELECT * FROM customers;
SELECT * FROM orders;

-- INNER JOIN
SELECT c.customer_id, name, email, order_date, order_status 
FROM customers c
	JOIN orders o
	ON c.customer_id = o.customer_id
WHERE email IS NOT NULL
ORDER BY order_date DESC
LIMIT 3;

SELECT c.customer_id, name, email, order_date, order_status 
FROM customers c
	JOIN orders o
	ON c.customer_id = o.customer_id;

-- LEFT JOIN
SELECT c.customer_id, name, email, order_id, order_date, order_status 
FROM customers c
	LEFT JOIN orders o
	ON c.customer_id = o.customer_id;

-- RIGHT JOIN
SELECT c.customer_id, name, email, order_id, order_date, order_status 
FROM customers c
	RIGHT JOIN orders o
	ON c.customer_id = o.customer_id;

-- UNION 
SELECT name, email FROM customers
UNION
SELECT order_date, order_status FROM orders;

-- FULL OUTER JOIN
SELECT c.customer_id, name, email, order_id, order_date, order_status 
FROM customers c
	LEFT JOIN orders o
	ON c.customer_id = o.customer_id  
UNION
SELECT c.customer_id, name, email, order_id, order_date, order_status 
FROM customers c
	RIGHT JOIN orders o
	ON c.customer_id = o.customer_id;
    
-- 어떤 고객이
-- 어떤 주문을 했으며(주문ID)
-- 어떤 상품을 주문했고(상픔ID)
-- 몇개 샀고(수량)
-- 상품 이름은 무엇이며
-- 얼마에 샀는가

-- 여러 테이블 JOIN
SELECT c.name, o.order_id, p.product_id, p.name, oi.quantity, p.price
FROM customers c
    JOIN orders o ON c.customer_id = o.customer_id
    JOIN order_items oi ON o.order_id = oi.order_id
    JOIN products p ON oi.product_id = p.product_id;
    
-- CROSS JOIN
USE codingon_db;

SELECT * FROM class
CROSS JOIN student;

-- SELF JOIN
SELECT * FROM employees;

SELECT e.name, m.name
FROM employees e
	LEFT JOIN employees m
    ON e.manager_id = m.employee_id;
    
SELECT e.name, m.name
FROM employees e
	JOIN employees m
    ON e.manager_id = m.employee_id;










    