import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditInputModule } from 'projects/edit-input/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, EditInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
