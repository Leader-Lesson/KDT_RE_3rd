use university_db;

-- ALTER
-- 1. 속성 추가
ALTER TABLE students ADD address VARCHAR(45);

-- 2. 컬럼 자료형 수정
ALTER TABLE students MODIFY address CHAR(20);

-- 3. 컬럼의 이름 수정
ALTER TABLE students RENAME COLUMN address TO student_addr;

-- 4. 컬럼의 이름과 타입 수정
ALTER TABLE students CHANGE student_addr address VARCHAR(45);

-- 5. 컬럼 삭제
ALTER TABLE students DROP address;

DESC students;

-- 6. FK키 삭제
ALTER TABLE students DROP FOREIGN KEY fk_advisor;
ALTER TABLE professors DROP FOREIGN KEY fk_mentee;

-- 7. 테이블 삭제
DROP TABLE students;








