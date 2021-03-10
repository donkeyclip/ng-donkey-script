import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgDonkeyLibModule } from 'projects/ng-donkey-lib/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgDonkeyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
