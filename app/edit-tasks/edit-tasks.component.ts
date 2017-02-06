import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from  '@angular/common';
import { Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

// Import the service used in the app
import { TaskService } from '../services/task.service'

// Import the directives used in the app
import { Task } from '../services/task'

@Component({
    moduleId: module.id,
    selector: 'edit-tasks',
    templateUrl: 'edit-tasks.component.html',
    styleUrls: []
})
export class EditTasksComponent {
    @Input()
    task: Task;

    constructor(private taskService: TaskService, private route: ActivatedRoute, private location: Location) { }

    ngOnInit(): void {
        this.route.params.switchMap((params: Params) => this.taskService.getTask(+params['id'])).subscribe(task => this.task = task);
    }

    save(task: Task): void {
        this.taskService.update(task)
            .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}
