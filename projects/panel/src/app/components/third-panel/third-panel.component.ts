import { Component } from '@angular/core';

@Component({
  selector: 'app-third-panel',
  templateUrl: './third-panel.component.html',
  styleUrls: ['./third-panel.component.css']
})
export class ThirdPanelComponent {
  links = [
    {
      name: 'Main Page of Panel MFE',
      link: '/panel'
    },
    {
      name: 'First Page of Panel MFE',
      link: '/panel/first'
    },
    {
      name: 'Second Page of Panel MFE',
      link: '/panel/second'
    },
  ];
}
