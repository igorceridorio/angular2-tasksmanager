import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Import the directives used in the app
import { Task } from '../services/task'

// Import the service used in the app
import { TaskService } from '../services/task.service'

@Component({
    moduleId: module.id,
    selector: 'my-tasks',
    templateUrl: 'my-tasks.component.html',
    styleUrls: ['my-tasks.component.css'],
    providers: [TaskService]
})

export class MyTasksComponent implements OnInit{
    
    tasks: Task[];
    //task: Task =  {id: 3, name: 'Testing task', subtasks: [{id: 1, name: 'Testing subtask'}], priority: 'medium'};
    task: Task;

    constructor(public taskService: TaskService, private router: Router) {  }

    ngOnInit(): void {
        this.taskService.getTasks().then(tasks => this.tasks = tasks);
    }

    setTask(task: Task): void {
        this.task = task;
        this.router.navigate(['/edit-tasks', this.task]);
    }

}