-- 1
SELECT name, gender
FROM student
WHERE age >= 25;

-- 2
SELECT DISTINCT class_id FROM class;

-- 3 
SELECT name, age FROM student
WHERE gender = "남"
ORDER BY age;

-- 4
SELECT name, class_id FROM student
WHERE name LIKE "이%";
 
-- 5
SELECT * FROM student
WHERE age IS NULL;

-- 6
SELECT * FROM student
WHERE join_date BETWEEN "2024-03-01" AND "2024-04-30";

SELECT * FROM student
WHERE join_date LIKE "2024-03%" OR join_date LIKE "2024-04%";

-- 7
SELECT * FROM class
ORDER BY start_date DESC
LIMIT 3;

-- 8
SELECT name FROM student
WHERE (class_id IN ("CLS01", "CLS02", "CLS03"))
AND (name LIKE "%정%" OR name LIKE "%영%");




