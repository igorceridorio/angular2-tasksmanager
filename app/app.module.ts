import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components used in the app
import { AppComponent }  from './app.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { EditTasksComponent } from './edit-tasks/edit-tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';

// Modules used in the app
import { MyTasksModule } from './my-tasks/my-tasks.module';
import { EditTasksModule } from './edit-tasks/edit-tasks.module';
import { NewTaskModule } from './new-task/new-task.module';

// Services used in the app
import { TaskService } from './services/task.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    MyTasksModule,
    NewTaskModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
        {path: '', redirectTo: '/my-tasks', pathMatch: 'full'},
        {path: 'my-tasks', component: MyTasksComponent},
        {path: 'edit-tasks', component: EditTasksComponent},
        {path: 'new-task', component: NewTaskComponent}
      ])
    ],
  declarations: [ 
    AppComponent,
    EditTasksComponent 
    ],
  bootstrap:    [ AppComponent ],
  providers:    [ TaskService ]
})
export class AppModule { }
