import { Component, OnInit } from '@angular/core';
import { AuthService } from 'auth';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dashboard';
  date: string = '';
  showTime = false;

  constructor(
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.date = moment().format('YYYY-MM-DD');
  }

  logOut()
  {
    this.auth.destroy();
  }

  onShowTime(): void {
    this.showTime = true;
  }
  
}
