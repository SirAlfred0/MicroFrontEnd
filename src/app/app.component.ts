import { Component, OnInit } from '@angular/core';
import { AuthService } from 'auth';
import { IUser } from 'auth/lib/models/IUser.model';
import { BroadCastChannelService } from 'cross-tab-communication';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: IUser | null = null;

  constructor(
    private authService: AuthService,
    private broadCastService: BroadCastChannelService<string>
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

    this.broadCastService.createChannel('private_bus');
    this.broadCastService.createChannel('public_bus');
  }
}
