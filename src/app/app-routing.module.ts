import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../projects/home/src/app/app.module').then(m => m.AppModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../../projects/dashboard/src/app/app.module').then(m => m.AppModule)
  },
  {
    path: 'panel',
    loadChildren: () => import('../../projects/panel/src/app/app.module').then(m => m.AppModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
