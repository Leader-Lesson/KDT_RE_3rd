import mysql.connector
from mysql.connector import Error

# MySQL 연결 정보로 연결
conn = mysql.connector.connect(
    host='localhost',
    user='user', #your_username
    password='1234', #your_password
    database='codingon' #your_database_name
)

# SQL 실행을 위한 cursor 객체 생성
cursor = conn.cursor()


# # 쿼리 실행 
# cursor.execute("SELECT * FROM users")

# for row in cursor.fetchall():
#     print(row)

# 예외처리 적용
try:
    # 쿼리 실행
    cursor.execute("SELECT * FROM users")
    for row in cursor.fetchall():
        print(row)
except Error as e:
    print("Error while connecting to MySQL", e)
finally:
    if conn.is_connected():
        cursor.close()
        conn.close()
        print("MySQL connection is closed")



# 연결 종료
conn.close()