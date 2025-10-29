USE codingon_db;

-- 1
SELECT class_id, COUNT(*) student_count
FROM student
GROUP BY class_id;

-- 2
SELECT gender, AVG(age) avg_age
FROM student
GROUP BY gender;

-- 3
SELECT gender, AVG(age) avg_age
FROM student
GROUP BY gender
HAVING AVG(age) >= 26;

-- 4
SELECT class_id, MIN(join_date) first_join
FROM student
GROUP BY class_id;

-- 5
SELECT class_id, MIN(age) min_age
FROM student
GROUP BY class_id
HAVING MIN(age) >= 25;

-- 6
SELECT gender, MAX(age) - MIN(age) as age_gap
FROM student
GROUP BY gender
HAVING MAX(age) - MIN(age) >= 3;

-- 7
SELECT class_id, avg(age) avg_age
FROM student
GROUP BY class_id
HAVING avg(age) >= 24
ORDER BY avg(age) DESC;






