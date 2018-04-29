import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DiretivaNgIfComponent } from './diretiva-ng-if/diretiva-ng-if.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';


@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgIfComponent,
    DiretivaNgifComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
