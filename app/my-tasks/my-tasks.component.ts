import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

// Import the directives used in the app
import { Task } from '../services/task'

// Import the service used in the app
import { TaskService } from '../services/task.service'

@Component({
    moduleId: module.id,
    selector: 'my-tasks',
    templateUrl: 'my-tasks.component.html',
    providers: [TaskService]
})

export class MyTasksComponent implements OnInit{
    tasks: Task[];
    task: Task;

    constructor(public taskService: TaskService, private router: Router) {  }

    ngOnInit(): void {
        this.taskService.getTasks().then(tasks => this.tasks = tasks);
    }

    setTask(task: Task): void {
        this.task = task;
        this.router.navigate(['/edit-tasks', this.task]);
    }
    
    deleteTask(task: Task): void {
        this.taskService
            .delete(task.id)
            .then(() => {
                this.tasks.filter(t => t !== task);
            });
        this.taskService.getTasks().then(tasks => this.tasks = tasks);
    }

    newTask(): void {
        this.router.navigate(['/new-task']);
    }

}