import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message: string = '';

  constructor(
    private router: Router,
  ){}

  ngOnInit(): void {
    if(localStorage.getItem('token') == null)
    {
      this.router.navigate(['/panel']);
    }else{
      this.message = 'you are logged in';
    }
  }
}
