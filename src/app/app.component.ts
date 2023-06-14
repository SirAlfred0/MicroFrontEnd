import { Component, OnInit } from '@angular/core';
import { AuthService } from 'auth';
import { IUser } from 'auth/lib/models/IUser.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: IUser | null = null;

  constructor(
    private authService: AuthService
  )
  {}


  sideNavState = true;

  onChangeSideNavState()
  {
    this.sideNavState = !this.sideNavState;
  }

  ngOnInit(): void {
    this.authService.user$.subscribe((user: IUser | null) => {
      this.user = user;
    })
    console.log(localStorage.getItem('token'));
  }
}
