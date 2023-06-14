import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      type: 'module',
      exposedModule: './home'
    }).then(m => m.AppModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      type: 'module',
      exposedModule: './dashboard'
    }).then(m => m.AppModule)
  },
  {
    path: 'panel',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      type: 'module',
      exposedModule: './panel'
    }).then(m => m.AppModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
