// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// This Module's Components
import { MyTasksComponent } from './my-tasks.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        MyTasksComponent,
    ],
    exports: [
        MyTasksComponent,
    ]
})
export class MyTasksModule {

}
