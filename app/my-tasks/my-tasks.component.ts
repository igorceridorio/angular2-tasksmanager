import { Component, OnInit } from '@angular/core';

// Import the directives used in the app
import { Task } from '../services/task'

// Import the service used in the app
import { TaskService } from '../services/task.service'

@Component({
    moduleId: module.id,
    selector: 'my-tasks',
    template:`
        <h2>My tasks</h2>
        <ul class="tasks">
            <li *ngFor="let task of tasks">
            <span>ID: {{task.id}} - Name: {{task.name}} - Priority: {{task.priority}}</span>
            </li>
        </ul>
        `,
    templateUrl: 'my-tasks.component.html',
    styleUrls: [],
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