import { Component, OnInit } from '@angular/core';
import { CommentModel } from './comment.model';
import { HttpClient } from '@angular/common/http'
import { RouterModule, Routes, ActivatedRoute } from '@angular/router'
import { ContentGetJsonService } from '../content-get-json.service'


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
  url:string = "http://whhhhatevver.io";
 // urlisvalid:boolean = false;

  comments:CommentModel[]=[];
  constructor(private http:HttpClient,
  private route:ActivatedRoute,private service:ContentGetJsonService) { 
    this.http = http;
    this.service = service;
  }

  ngOnInit() {
    this.url = this.service.url;
    console.log("url:"+this.url);
    
    if(this.url!=""){
   //   this.urlisvalid = true;
      console.log(this.url);
      this.http.post<Res>("http://localhost:8088/showComment",{url:this.url}).subscribe((data=>{
        console.log(data);
        this.comments = data.comments;
      }));
    }
  //  this.urlisvalid = false;
  }

  getURL(): void {
    const url = this.route.snapshot.paramMap.get('url');
    this.url = url;
  }

  submit(){
    console.log(this.model);
    this.model.datetime = this.getNowFormatDate();
    this.model.url = this.url;
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


