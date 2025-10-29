import mysql.connector
from mysql.connector import Error

# ----------------------------------------------
# 1. DB 연결 설정
# ⚠️ [필수] 본인의 MySQL 환경에 맞게 수정하세요!
# ----------------------------------------------
db_config = {
    'host': 'localhost',        # MySQL 서버 주소 (대부분 localhost)
    'user': 'YOUR_USERNAME',    # MySQL 사용자 계정
    'password': 'YOUR_PASSWORD',# MySQL 비밀번호
    'database': 'YOUR_DATABASE' # 사용할 데이터베이스 이름
}

def create_connection():
    """MySQL 데이터베이스에 연결합니다."""
    try:
        conn = mysql.connector.connect(**db_config)
        return conn
    except Error as e:
        print(f"Error connecting to MySQL: {e}")
        return None

# ----------------------------------------------
# 2. CRUD 기능 함수
# ----------------------------------------------

# Create
def add_post(author, content):
    """새로운 글을 posts 테이블에 추가합니다."""
    query = "INSERT INTO posts (author, content) VALUES (%s, %s)"
    conn = create_connection()
    
    if conn:
        try:
            with conn.cursor() as cursor:
                cursor.execute(query, (author, content))
                conn.commit() # 변경 사항을 DB에 반영
                print(f"Success: Added post by {author}")
        except Error as e:
            print(f"Error adding post: {e}")
        finally:
            conn.close()

# Read (All)
def get_all_posts():
    """모든 글을 최신순으로 정렬하여 가져옵니다."""
    query = "SELECT id, author, content, created_at FROM posts ORDER BY created_at DESC"
    conn = create_connection()
    
    if conn:
        try:
            # dictionary=True: 결과를 딕셔너리 형태로 받아서 다루기 편함
            with conn.cursor(dictionary=True) as cursor:
                cursor.execute(query)
                results = cursor.fetchall() # 모든 결과를 리스트로 받음
                return results
        except Error as e:
            print(f"Error fetching posts: {e}")
            return []
        finally:
            conn.close()

# Read (Specific Author)
def get_posts_by_author(author_name):
    """특정 작성자의 글만 최신순으로 가져옵니다."""
    query = "SELECT * FROM posts WHERE author = %s ORDER BY created_at DESC"
    conn = create_connection()
    
    if conn:
        try:
            with conn.cursor(dictionary=True) as cursor:
                cursor.execute(query, (author_name,)) # 튜플 형태로 파라미터 전달
                results = cursor.fetchall()
                return results
        except Error as e:
            print(f"Error fetching posts by author: {e}")
            return []
        finally:
            conn.close()

# Update
def update_post_content(post_id, new_content):
    """특정 ID의 글 내용을 수정합니다."""
    query = "UPDATE posts SET content = %s WHERE id = %s"
    conn = create_connection()
    
    if conn:
        try:
            with conn.cursor() as cursor:
                cursor.execute(query, (new_content, post_id))
                conn.commit()
                print(f"Success: Updated post ID {post_id}")
        except Error as e:
            print(f"Error updating post: {e}")
        finally:
            conn.close()

# Delete
def delete_post(post_id):
    """특정 ID의 글을 삭제합니다."""
    query = "DELETE FROM posts WHERE id = %s"
    conn = create_connection()
    
    if conn:
        try:
            with conn.cursor() as cursor:
                cursor.execute(query, (post_id,))
                conn.commit()
                print(f"Success: Deleted post ID {post_id}")
        except Error as e:
            print(f"Error deleting post: {e}")
        finally:
            conn.close()

# ----------------------------------------------
# 3. 함수 실행 및 테스트 (메인 코드)
# ----------------------------------------------

# [보조 함수] 글 목록을 예쁘게 출력하기
def print_posts(posts):
    if not posts:
        print("\n--- (조회된 글이 없습니다.) ---")
        return
    
    print("\n--- [게시글 목록] ---")
    for post in posts:
        print(f"  ID: {post['id']} | 작성자: {post['author']} ({post['created_at']})")
        print(f"  내용: {post['content']}")
        print("  --------------------")


if __name__ == "__main__":
    
    # ⚠️ [주의] 이 스크립트를 실행하기 전에, 
    #          먼저 SQL로 예시 데이터를 넣어두세요!
    
    # --- [R] 체크포인트 1: 모든 글 최신순으로 보기 ---
    print("===== 1. 모든 글 조회 (최신순) =====")
    all_posts = get_all_posts()
    print_posts(all_posts)

    # --- [R] 체크포인트 2: '김코딩' 글만 보기 ---
    print("\n===== 2. '김코딩' 작성 글 조회 =====")
    kim_posts = get_posts_by_author('김코딩')
    print_posts(kim_posts)

    # --- [U] 체크포인트 3: 2번 글 수정하기 ---
    print("\n===== 3. ID 2번 글 내용 수정 =====")
    update_post_content(2, '방명록 실습 완료! 다음으로 넘어가자.')
    
    # 수정 후 2번 글이 포함된 전체 목록 다시 확인
    all_posts_after_update = get_all_posts()
    print_posts(all_posts_after_update)

    # --- [D] 체크포인트 4: 3번 글 삭제하기 ---
    print("\n===== 4. ID 3번 글 삭제 =====")
    delete_post(3)
    
    # 삭제 후 전체 목록 다시 확인
    all_posts_after_delete = get_all_posts()
    print_posts(all_posts_after_delete)

    # --- [C] 보너스: 새 글 작성하기 ---
    print("\n===== 5. 새 글 작성 테스트 =====")
    add_post('파이썬 마스터', 'CRUD 정복 완료!')
    
    # 새 글 작성 후 전체 목록 확인
    final_posts = get_all_posts()
    print_posts(final_posts)