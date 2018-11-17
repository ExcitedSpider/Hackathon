
Drop Table if exists  bunnyUser;
CREATE Table bunnyUser(
  ID INTEGER primary key AUTOINCREMENT,
  name text not null,
  password text not null
);
INSERT INTO bunnyUser(name,password)
  VALUES("bunny","bunnyread"),
        ("qe","qe"),
        ("lyh","lyh");

Drop Table if exists bunnyComments;
CREATE Table bunnyComments(
  name text not null,
  URL text not null,
  comments text not null,
  cdate text not null
);
 INSERT INTO bunnyComments(name, URL, comments, cdate)
  VALUES("qe","baidu.com", "lj", datetime('now')),
        ("lyh","jingdong.com","tql",datetime('now','-1 day'));
