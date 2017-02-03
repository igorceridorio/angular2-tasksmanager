// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// This Module's Components
import { NewTaskComponent } from './new-task.component';

@NgModule({
    imports: [ 
        BrowserModule, ReactiveFormsModule 
    ],
    declarations: [
        NewTaskComponent,
    ],
    exports: [
        NewTaskComponent,
    ]
})
export class NewTaskModule {

}
