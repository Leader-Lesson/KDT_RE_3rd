from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from app.dependencies import get_db
from app.models.post import Post
from app.schemas.post import PostCreate, PostUpdate
from sqlalchemy import select

router = APIRouter()

@router.get("/posts")
def get_posts(db: Session = Depends(get_db)):
  stmt = select(Post).order_by(Post.created_at.desc())
  posts = db.scalars(stmt).all()
  return posts

# 특정 ID로 조회
@router.get("/post/{post_id}")
def get_post(post_id: int, db: Session = Depends(get_db)):
  # PK 값으로 조회하는 빠른 방법
  db_post = db.get(Post, post_id)

  if db_post is None:
    raise HTTPException(status_code=404, detail="Post not found")
  return db_post


@router.post("/posts")
def create_post(post: PostCreate, db: Session = Depends(get_db)):
  try:
    db_post = Post(author=post.author, content=post.content)

    db.add(db_post)
    db.commit()
    db.refresh(db_post)

    return db_post
  
  except Exception as e:
    raise HTTPException(status_code=400, detail=str(e))

@router.put("/posts/{post_id}")
def update_post(post_id: int, post: PostUpdate, db: Session = Depends(get_db)):
  try:
    db_post = db.get(Post, post_id)
    if db_post is None:
      raise HTTPException(status_code=404, detail="Post not found")
    
    db_post.content = post.content
    db.commit()
    db.refresh(db_post)

    return db_post
  
  except Exception as e:
    raise HTTPException(status_code=400, detail=str(e))
  

@router.delete("/posts/{post_id}")
def delete_post(post_id: int, db: Session = Depends(get_db)):
  try:
    db_post = db.get(Post, post_id)
    if db_post is None:
      raise HTTPException(status_code=404, detail="Post not found")
    
    db.delete(db_post)
    db.commit()
    
    return {"message": "Post deleted successfully"}
  
  except Exception as e:
    raise HTTPException(status_code=400, detail=str(e))
