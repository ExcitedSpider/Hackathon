import json
import testdb
import time
def login(data):
    args = [data["name"]]
    # print(args)
    # sql = "select password from bunnyUser where name={}".format(data["name"])
    db = testdb.database()
    res = db.loginQuery(args)
    # print(res,data["password"])
    if res == None:
        return False
    if res == data["password"]:
        return True
    else:
        return False

def addComment(data):
    # args = [data["name"],data["url"],data["comment"], time.strftime("%Y-%m-%d %H:%M:%S",time.localtime())]
    args = [data["name"], data["url"], data["comment"], data["datetime"]]
    url = {"url": data["url"]}
    # print(args)
    db = testdb.database()
    db.addCommentQuery(args)
    return showComment(url)

def showComment(data):
    db = testdb.database()
    args = [data["url"]]
    fetchData = db.showCommentQuery(args)
    comments = []
    for row in fetchData:
        oneComment = {
            "name": row[0],
            "comment": row[1],
            "datetime": row[2]
        }
        comments.append(oneComment)
    res = {"comments": comments}
    res = json.dumps(res)
    return res
