import json
from handle import login
import requests
def login(data):
    info = login(data)
    print(info)
    return info
if __name__ == "__main__":
    data = {
        "name": "bunny",
        "password": "bunnyread"
    }
    info = json.dumps(data)
    r = requests.post("http://127.0.0.1:8080/login",data=info)
    print(r.text)


