from fastapi import APIRouter, HTTPException
from app.db import get_connection
from app.schemas.post import PostCreate, PostUpdate

router = APIRouter()

@router.get("/posts")
def get_posts():
  conn = get_connection()
  cursor = conn.cursor()
  cursor.execute("SELECT * FROM posts ORDER BY created_at DESC")
  result = cursor.fetchall()
  conn.close()
  return result

# 특정 ID로 조회
@router.get("/post/{post_id}")
def get_post(post_id: int):
  conn = get_connection()
  cursor = conn.cursor()
  cursor.execute("SELECT * FROM posts WHERE id = %s", (post_id,))
  result = cursor.fetchone()
  conn.close()
  return result

@router.post("/posts")
def create_post(post: PostCreate):
  try:
    conn = get_connection()
    cursor =conn.cursor()

    sql = "INSERT INTO posts (author, content) VALUES (%s, %s)"
    cursor.execute(sql, (post.author, post.content))
    new_post_id = cursor.lastrowid # 방금 생성된 ID 가져오기
    conn.commit()

    # 방금 생성된 데이터 조회해서 반환
    cursor.execute("SELECT * FROM posts WHERE id = %s", (new_post_id,))
    new_post = cursor.fetchone()
    return new_post
  
  except Exception as e:
    raise HTTPException(status_code=400, detail=str(e))
  finally:
    if conn.is_connected():
      cursor.close()
      conn.close()

@router.put("/posts/{post_id}")
def update_post(post_id: int, post: PostUpdate):
  try:
    conn = get_connection()
    cursor =conn.cursor()

    sql = "UPDATE posts SET content=%s WHERE post_id=%s"
    cursor.execute(sql, (post.content,))
    conn.commit()

    if cursor.rowcount == 0:
      raise HTTPException(status_code=404, detail="Post not found")
    
    cursor.execute("SELECT * FROM posts WHERE id = %s", (post_id,))
    updated_post = cursor.fetchone()
    return updated_post
  
  except Exception as e:
    raise HTTPException(status_code=400, detail=str(e))
  finally:
    if conn.is_connected():
      cursor.close()
      conn.close()

@router.delete("/posts/{post_id}")
def delete_post(post_id: int):
  try:
    conn = get_connection()
    cursor =conn.cursor()

    sql = "DELETE FROM posts WHERE post_id=%s"
    cursor.execute(sql, (post_id,))
    conn.commit()

    if cursor.rowcount == 0:
      raise HTTPException(status_code=404, detail="Post not found")

    return {"message": "Post deleted successfully"}
  
  except Exception as e:
    raise HTTPException(status_code=400, detail=str(e))
  finally:
    if conn.is_connected():
      cursor.close()
      conn.close()


# 추가 구조

# from fastapi import APIRouter
# from app.db import get_connection
# from fastapi import HTTPException
# from app.schemas.post import PostCreate, PostUpdate

# router = APIRouter()

# # --- [C] Create ---
# @router.post("/posts")
# def create_post(post: PostCreate):
#     """새로운 글을 생성합니다."""
#     query = "INSERT INTO posts (author, content) VALUES (%s, %s)"
#     conn = get_connection()
#     if not conn:
#         raise HTTPException(status_code=500, detail="Database connection failed")
    
#     try:
#         with conn.cursor(dictionary=True) as cursor:
#             cursor.execute(query, (post.author, post.content))
#             new_post_id = cursor.lastrowid # 방금 생성된 ID 가져오기
#             conn.commit()
            
#             # 방금 생성된 전체 데이터를 다시 조회해서 반환
#             cursor.execute("SELECT * FROM posts WHERE id = %s", (new_post_id,))
#             new_post = cursor.fetchone()
#             return new_post
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Database error: {e}")
#     finally:
#         conn.close()

# # --- [R] Read (All) ---
# @router.get("/posts")
# def get_all_posts():
#     """모든 글을 최신순으로 조회합니다."""
#     query = "SELECT * FROM posts ORDER BY created_at DESC"
#     conn = get_connection()
#     if not conn:
#         raise HTTPException(status_code=500, detail="Database connection failed")
        
#     try:
#         with conn.cursor(dictionary=True) as cursor:
#             cursor.execute(query)
#             posts = cursor.fetchall()
#             return posts
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Database error: {e}")
#     finally:
#         conn.close()

# # --- [R] Read (One) ---
# @router.get("/posts/{post_id}")
# def get_post(post_id: int):
#     """특정 ID의 글을 조회합니다."""
#     query = "SELECT * FROM posts WHERE id = %s"
#     conn = get_connection()
#     if not conn:
#         raise HTTPException(status_code=500, detail="Database connection failed")
        
#     try:
#         with conn.cursor(dictionary=True) as cursor:
#             cursor.execute(query, (post_id,))
#             post = cursor.fetchone()
#             if not post:
#                 raise HTTPException(status_code=404, detail="Post not found")
#             return post
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Database error: {e}")
#     finally:
#         conn.close()

# # --- [U] Update ---
# @router.put("/posts/{post_id}")
# def update_post(post_id: int, post_update: PostUpdate):
#     """특정 ID의 글 내용을 수정합니다."""
#     query = "UPDATE posts SET content = %s WHERE id = %s"
#     conn = get_connection()
#     if not conn:
#         raise HTTPException(status_code=500, detail="Database connection failed")
        
#     try:
#         with conn.cursor(dictionary=True) as cursor:
#             # 먼저 해당 글이 존재하는지 확인
#             cursor.execute("SELECT * FROM posts WHERE id = %s", (post_id,))
#             existing_post = cursor.fetchone()
#             if not existing_post:
#                 raise HTTPException(status_code=404, detail="Post not found")

#             # 존재하면 수정
#             cursor.execute(query, (post_update.content, post_id))
#             conn.commit()
            
#             # 수정된 최신 데이터를 다시 조회해서 반환
#             cursor.execute("SELECT * FROM posts WHERE id = %s", (post_id,))
#             updated_post = cursor.fetchone()
#             return updated_post
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Database error: {e}")
#     finally:
#         conn.close()

# # --- [D] Delete ---
# @router.delete("/posts/{post_id}")
# def delete_post(post_id: int):
#     """특정 ID의 글을 삭제합니다."""
#     query = "DELETE FROM posts WHERE id = %s"
#     conn = get_connection()
#     if not conn:
#         raise HTTPException(status_code=500, detail="Database connection failed")
        
#     try:
#         with conn.cursor() as cursor:
#             # 먼저 해당 글이 존재하는지 확인
#             cursor.execute("SELECT id FROM posts WHERE id = %s", (post_id,))
#             existing_post = cursor.fetchone()
#             if not existing_post:
#                 raise HTTPException(status_code=404, detail="Post not found")

#             # 존재하면 삭제
#             cursor.execute(query, (post_id,))
#             conn.commit()
#             return {"message": f"Post ID {post_id} deleted successfully"}
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Database error: {e}")
#     finally:
#         conn.close()