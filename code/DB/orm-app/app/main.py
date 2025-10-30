from fastapi import FastAPI
from app.routers import user
from app.db.session import Base, engine

app = FastAPI()

# ORM 라이브러리 불러오기
Base.metadata.create_all(bind=engine)

@app.get("/")
def root():
    return {"message": "FastAPI with MySQL"}
# 2) 라우터 등록
app.include_router(user.router)