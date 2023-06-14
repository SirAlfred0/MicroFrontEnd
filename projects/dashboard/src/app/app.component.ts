import { Component, OnInit } from '@angular/core';
import { AuthService } from 'auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dashboard';

  constructor(
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    
  }

  logOut()
  {
    this.auth.destroy();
  }
  
}
