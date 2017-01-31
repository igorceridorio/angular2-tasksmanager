import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

// Modules used in the app
import { MyTasksModule } from './my-tasks/my-tasks.module'

@NgModule({
  imports:      [ 
    BrowserModule, 
    MyTasksModule
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
