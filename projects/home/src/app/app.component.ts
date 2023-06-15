import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BroadCastChannelService } from 'cross-tab-communication';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message: string = '';
  formMessage: FormControl = new FormControl('', {nonNullable: true});
  formType: FormControl = new FormControl('public_bus', {nonNullable: true});

  privateNames: string[] = [];
  publicNames: string[] = [];

  constructor(
    private router: Router,
    private broadCastService: BroadCastChannelService
  ){}

  ngOnInit(): void {
    if(localStorage.getItem('token') == null)
    {
      this.router.navigate(['/panel']);
    }else{
      this.message = 'you are logged in';
    }

    this.broadCastService.getChannel<string>('private_bus').messages$.subscribe((data: string) => {
      this.privateNames.push(data);
    })

    this.broadCastService.getChannel<string>('public_bus').messages$.subscribe((data: string) => {
      this.publicNames.push(data);
    })
  }


  onSendMessage()
  {
    this.broadCastService.getChannel<string>(this.formType.value).sendMessage(this.formMessage.value);
    if(this.formType.value == 'public_bus')
    {
      this.publicNames.push(this.formMessage.value);
    }else{
      this.privateNames.push(this.formMessage.value);
    }
    
    this.formMessage.reset();
  }
}
