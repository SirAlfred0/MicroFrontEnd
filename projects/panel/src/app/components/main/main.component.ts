import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  links = [
    {
      name: 'First Page of Panel MFE',
      link: 'first'
    },
    {
      name: 'Second Page of Panel MFE',
      link: 'second'
    },
    {
      name: 'Third Page of Panel MFE',
      link: 'third'
    }
  ];
}
