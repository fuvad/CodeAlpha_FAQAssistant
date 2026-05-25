from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from faq_data import faq_list
from nlp_utils import preprocess

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str
    
questions = [preprocess(faq['question']) for faq in faq_list]

vectorizer = TfidfVectorizer()

faq_vectors = vectorizer.fit_transform(questions)

@app.post("/chat")
def chat(data: ChatRequest):
    user_text = preprocess(data.message)
    
    user_vector = vectorizer.transform([user_text])
    
    scores = cosine_similarity(user_vector, faq_vectors)
    
    best_index = scores.argmax()
    
    best_score = scores[0][best_index]
    
    if best_score < 0.4:
        return {
            "answer": "Sorry, I could not find a matching answer."
        }
        
    return {
        "answer": faq_list[best_index]["answer"]
    }