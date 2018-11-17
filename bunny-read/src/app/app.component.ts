import { Component } from '@angular/core';
import { FloatingActionButton } from 'materialize-css'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bunny-read';
  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.fixed-action-btn');
      FloatingActionButton.init(elems);
    });
  }
}
