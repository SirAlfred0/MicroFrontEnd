import { Component } from '@angular/core';

@Component({
  selector: 'app-first-panel',
  templateUrl: './first-panel.component.html',
  styleUrls: ['./first-panel.component.css']
})
export class FirstPanelComponent {
  links = [
    {
      name: 'Main Page of Panel MFE',
      link: '/panel'
    },
    {
      name: 'Second Page of Panel MFE',
      link: '/panel/second'
    },
    {
      name: 'Third Page of Panel MFE',
      link: '/panel/third'
    }
  ];
}
