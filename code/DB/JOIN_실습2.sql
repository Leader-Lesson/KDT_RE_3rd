-- 1
SELECT c.name, o.order_date
FROM customers c
	JOIN orders O
    ON c.customer_id = o.customer_id;
    
-- 2
SELECT c.name, o.order_date
FROM customers c
	LEFT JOIN orders O
    ON c.customer_id = o.customer_id
WHERE order_id IS NULL;

-- 3
SELECT c.name, o.order_id
FROM customers c
	LEFT JOIN orders O
    ON c.customer_id = o.customer_id;
    
-- 4
SELECT c.name customer_name, p.name product_name
FROM customers c
CROSS JOIN products p;

-- 5
SELECT e.name employee_name, m.name manager_name
	FROM employees e
	LEFT JOIN employees m 
    on e.manager_id = m.employee_id;

-- 6
SELECT c.name, o.order_date
FROM customers c
	LEFT JOIN orders O
    ON c.customer_id = o.customer_id
UNION
SELECT c.name, o.order_date
FROM customers c
	RIGHT JOIN orders O
    ON c.customer_id = o.customer_id;
    
-- 7
SELECT name product_name, SUM(quantity) total_quantity 
FROM order_items oi
	JOIN products p 
    ON oi.product_id = p.product_id
WHERE unit_price IS NOT NULL
GROUP BY name
ORDER BY total_quantity DESC;

-- 8
SELECT c.name customer_name, p.name product_name, quantity, unit_price
FROM customers c
	JOIN orders o ON c.customer_id = o.customer_id
    JOIN order_items oi ON o.order_id = oi.order_id
    JOIN products p ON oi.product_id = p.product_id
WHERE unit_price IS NOT NULL;







