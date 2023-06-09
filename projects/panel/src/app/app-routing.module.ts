import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstPanelComponent } from './components/first-panel/first-panel.component';
import { MainComponent } from './components/main/main.component';
import { SecondPanelComponent } from './components/second-panel/second-panel.component';
import { ThirdPanelComponent } from './components/third-panel/third-panel.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'first',
        component: FirstPanelComponent
      },
      {
        path: 'second',
        component: SecondPanelComponent
      },
      {
        path: 'third',
        component: ThirdPanelComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
