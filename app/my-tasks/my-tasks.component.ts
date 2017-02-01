import { Component, OnInit } from '@angular/core';

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

    constructor(private taskService: TaskService) { }

    getTasks(): void {
        this.taskService.getTasks().then(tasks => this.tasks = tasks);
    }

    ngOnInit(): void {
        this.getTasks();
    }
}