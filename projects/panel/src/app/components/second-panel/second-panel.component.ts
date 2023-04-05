import { Component } from '@angular/core';

@Component({
  selector: 'app-second-panel',
  templateUrl: './second-panel.component.html',
  styleUrls: ['./second-panel.component.css']
})
export class SecondPanelComponent {
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
      name: 'Third Page of Panel MFE',
      link: '/panel/third'
    }
  ];
}
