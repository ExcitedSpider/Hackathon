
from flask import Flask, request, session,make_response
import json
import handle
import time

app = Flask(__name__)

@app.route('/login',methods= ['POST','GET'])
def Login():
    response = None
    if request.method == 'POST':
        content = request.data
        print(content)
        data = json.loads(content)
        res = handle.login(data)
        if res:
            session['user'] = data["name"]
            response = make_response("login")
            response.set_cookie(key=data["name"],value='',expires=time.time()+6*60)
            return response
        else:
            response = make_response("wrong pw",404)
    if 'user' in session:
        response = make_response("already login")
    return response

@app.route('/addComment',methods=['POST','GET'])
def addComment():
    response = None
    if request.method == 'POST':
        content = request.data
        data = json.loads(content)
        res = handle.addComment(data)
        response = make_response(res)
    response = make_response("please login first",404)
    return response

@app.route('/showComment',methods=['POST','GET'])
def showComment():
    response = None
    content = request.data
    data = json.loads(content)
    print(data)
    res = handle.showComment(data)
    response = make_response(res)
    # response = make_response("1123")
    return response


if __name__ == "__main__":
    app.secret_key = '12345678'
    app.run(port=8088)

