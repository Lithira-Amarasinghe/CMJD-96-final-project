import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-panel';

  color = ''

  changeColorToBlack(){
    this.color = 'black'
  }
  changeColorToWhite(){
    this.color = 'white'
  }
}
