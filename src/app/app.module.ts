import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import {  ChildCmpComponent } from "./child-cmp/child-cmp.component";

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChildCmpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
