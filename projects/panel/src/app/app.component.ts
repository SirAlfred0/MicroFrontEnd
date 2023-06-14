import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'auth';
import { IUser } from 'auth/lib/models/IUser.model';

const user: IUser = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  dateOfBirth: new Date(),
  nationalCode: '54354355',
  sexsuallity: 'male',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{


  constructor(
    private router: Router,
    private auth: AuthService
  ){}

  title = 'panel';

  login(): void
  {
    localStorage.setItem('token', 'test');
    this.router.navigate(['/']);
  }

  loginWithJohn()
  {
    this.auth.next(user);
    this.router.navigate(['/dashboard'])
  }
}
