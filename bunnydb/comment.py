import json
from handle import addComment
import requests
def comment(data):
    jdata = json.dumps(data)
    info = addComment(jdata)
    print(info)
if __name__ == "__main__":
    data = {
        "url": "baidu.com",
        "ID": "1",
        "cite": "tql"
    }
    info = json.dumps(data)
    r = requests.post("http://127.0.0.1:8080/comment",data=info)
    print(r.text)
    # comment(data)