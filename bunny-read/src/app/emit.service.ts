import { Injectable, EventEmitter, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitService implements OnInit {

  public eventEmit: any;
  constructor() {
    this.eventEmit = new EventEmitter();
   }
   ngOnInit() {}
}
