import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import {  ChildCmpComponent } from "./child-cmp/child-cmp.component";
import { CounterCmpComponent } from './counter-cmp/counter-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChildCmpComponent,
    CounterCmpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
