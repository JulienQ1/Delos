from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from responses import get_random_response
import time

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

sports = ["Rugby", "Football", "Tennis", "Volley", "Cyclisme"]

@app.get("/")
async def read_root():
    return {"message": "Welcome to the sports chatbot API"}

@app.get("/chat/{sport}")
async def chat(sport: str):
    if sport not in sports:
        return {"error": "Sport not supported"}
    
    response = get_random_response(sport)

    def word_by_word_response():
        for word in response.split():
            yield f"{word} "
            time.sleep(0.1)

    return StreamingResponse(word_by_word_response(), media_type="text/plain")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
