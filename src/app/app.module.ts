import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import {  ChildCmpComponent } from "./child-cmp/child-cmp.component";
import { CounterCmpComponent } from './counter-cmp/counter-cmp.component';
import { SiblingComponent } from './sibling/sibling.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { GrandGrandChildComponent } from './grand-grand-child/grand-grand-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChildCmpComponent,
    CounterCmpComponent,
    SiblingComponent,
    GrandChildComponent,
    GrandGrandChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
