import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent {
  links = [
    {
      name: 'Dashboard',
      link: '/dashboard'
    },
  ];
}