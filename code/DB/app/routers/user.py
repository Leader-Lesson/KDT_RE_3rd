from fastapi import APIRouter
from app.db import get_connection
from fastapi import HTTPException
from app.schemas.user import UserCreate, UserUpdate

router = APIRouter()

@router.get("/users")
def get_users():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users")
    result = cursor.fetchall()
    conn.close()
    return result

@router.post("/users")
def create_user(user: UserCreate):
    try:
        conn = get_connection()
        cursor = conn.cursor()

        sql = "INSERT INTO users (username, password, name, email) VALUES (%s, %s, %s, %s)"
        cursor.execute(sql,(user.username, user.password, user.name, user.email))
        conn.commit()
        return {"message": "User created successfully"}
    
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    finally:
        if conn.is_connected():
            cursor.close()
            conn.close()

@router.put("/users/{user_id}")
def update_user(user_id: int, user: UserUpdate):
    try:
        conn = get_connection()
        cursor = conn.cursor()

        sql = "UPDATE users SET name=%s, email=%s WHERE user_id=%s"
        cursor.execute(sql, (user.name, user.email, user_id))
        conn.commit()

        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail="User not found")
        
        return {"message": "User updated successfully"}
    
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    finally:
        if conn.is_connected():
            cursor.close()
            conn.close()

@router.delete("/users/{user_id}")
def delete_user(user_id: int):
    try:
        conn = get_connection()
        cursor = conn.cursor()

        sql = "DELETE FROM users WHERE user_id=%s"
        cursor.execute(sql, (user_id,))
        conn.commit()

        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail="User not found")
        
        return {"message": "User deleted successfully"}
    
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    finally:
        if conn.is_connected():
            cursor.close()
            conn.close()