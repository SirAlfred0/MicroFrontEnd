import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  sideNavState = true;

  onChangeSideNavState()
  {
    this.sideNavState = !this.sideNavState;
  }

  ngOnInit(): void {
    console.log(localStorage.getItem('token'));
  }
}
