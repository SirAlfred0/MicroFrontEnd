import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPanelComponent } from './components/first-panel/first-panel.component';
import { SecondPanelComponent } from './components/second-panel/second-panel.component';
import { ThirdPanelComponent } from './components/third-panel/third-panel.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPanelComponent,
    SecondPanelComponent,
    ThirdPanelComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
