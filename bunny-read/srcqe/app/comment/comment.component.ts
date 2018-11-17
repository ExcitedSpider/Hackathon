import { Component, OnInit } from '@angular/core';
import { CommentModel } from './comment.model';
import { HttpClient } from '@angular/common/http'


interface Res{
  comments:CommentModel[];
}


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  model:CommentModel = new CommentModel("游客","","");

  comments:CommentModel[]=[];
  constructor(private http:HttpClient) { 
    this.http = http;
  }

  ngOnInit() {
    this.http.post<Res>("http://localhost:8088/showComment",{url:'myurl'}).subscribe((data=>{
      console.log(data);
      this.comments = data.comments;
    }));
  }

  submit(){
    console.log(this.model);
    this.model.datetime = this.getNowFormatDate();
    this.model.url = "myurl";
    this.http.post<Res>("http://localhost:8088/addComment",this.model).subscribe((data=>{
      console.log(data);
      this.comments = data.comments;
      
    }));
    this.model.comment="";
    
  }

  getNowFormatDate() {
    return "2018/11/18";
  }
}


