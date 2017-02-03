import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from  '@angular/common';
import { Router } from '@angular/router';

// Import the directives used in the app
import { Task } from '../services/task'

// Import the service used in the app
import { TaskService } from '../services/task.service'

// Import the interface used in the app
import { TaskInterface } from '../services/task-subtask.interface'

@Component({
    moduleId: module.id,
    selector: 'new-task',
    templateUrl: 'new-task.component.html',
    styleUrls: [],
    providers: [TaskService]
})
export class NewTaskComponent implements OnInit {
    public myForm: FormGroup;
    
    constructor(private taskService: TaskService, private route: ActivatedRoute, private location: Location, private _fb: FormBuilder) { }

    ngOnInit() {
        this.myForm = this._fb.group({
            id: ['', [Validators.required]],
            name: ['', [Validators.required, Validators.minLength(5)]],
            subtasks: this._fb.array([
                this.initSubtask(),
            ]),
            priority: ['', [Validators.required]]
        });
    }

    initSubtask() {
        return this._fb.group({
            id: ['', [Validators.required]],
            name: ['', [Validators.required, Validators.minLength(5)]]
        });
    }

    addSubtask() {
        const control = <FormArray>this.myForm.controls['subtasks'];
        control.push(this.initSubtask());
    }

    removeSubtask(i: number) {
        const control = <FormArray>this.myForm.controls['subtasks'];
        control.removeAt(i);
    }

    save(model: TaskInterface) {
        // call the API to save data
        // ...
        console.log(model);
        
    }

    goBack(): void {
        this.location.back();
    }
}
