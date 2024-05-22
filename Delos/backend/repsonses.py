import random

def get_random_response(sport):
    responses = {
        "Rugby": "RUGBY " * random.randint(20, 50),
        "Football": "FOOTBALL " * random.randint(20, 50),
        "Tennis": "TENNIS " * random.randint(20, 50),
        "Volley": "VOLLEY " * random.randint(20, 50),
        "Cyclisme": "CYCLISME " * random.randint(20, 50),
    }
    return responses[sport]
