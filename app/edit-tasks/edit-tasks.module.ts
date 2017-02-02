// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// This Module's Components
import { EditTasksComponent } from './edit-tasks.component';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        EditTasksComponent,
    ],
    exports: [
        EditTasksComponent,
    ]
})
export class EditTasksModule {

}
