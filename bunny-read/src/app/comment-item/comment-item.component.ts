import { Component, OnInit, Input } from '@angular/core';
import { CommentModel } from '../comment/comment.model';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {

  @Input() comment:CommentModel;
  constructor() { }

  ngOnInit() {
  }

}
