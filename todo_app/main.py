from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from sqlmodel import Field, SQLModel, create_engine
from datetime import datetime
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

templates = Jinja2Templates(directory="templates")

class Todo(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str
    description: str
    start_time: datetime
    end_time: datetime

user_name = os.getenv("POSTGRES_USER")
database = os.getenv("POSTGRES_DB")
password = os.getenv("POSTGRES_PASSWORD")
host = os.getenv("POSTGRES_HOST")

DATABASE_URL = f"postgresql://{user_name}:{password}@{host}:5432/{database}"
engine = create_engine(DATABASE_URL, echo=True)

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

@app.on_event('startup')
def on_startup():
    create_db_and_tables()

@app.get("/", response_class=HTMLResponse)
def home(request: Request):
    return templates.TemplateResponse(
        request=request, name="index.html"
    )

@app.post("/todo/create")
def create_todo():
    pass