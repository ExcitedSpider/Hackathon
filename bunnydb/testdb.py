import sqlite3
class database:
    loginSql = "select password from bunnyUser where name=?"
    addCommentQuerySql = "insert into bunnyComments values(?, ?, ?, ?)"
    showCommentQuerySql = "select name,comments,cdate from bunnyComments where URL=?"
    def __init__(self):
        self.con = sqlite3.connect("./bunnydb/bunnyDB.db")
        if self.con == None:
            print(self.con.Error)
        else:
            print("connect success")
            self.cursor = self.con.cursor()

    def loginQuery(self, args):
        data = self.con.execute(self.loginSql,args)
        # print(data)
        res = data.fetchone()
        if res == None:
            return None
        return res[0]

    def addCommentQuery(self,args):
        data = self.con.execute(self.addCommentQuerySql,args)
        self.con.commit()
        return True

    def showCommentQuery(self,args):
        data = self.con.execute(self.showCommentQuerySql,args)
        fetchData = data.fetchall()
        return fetchData

