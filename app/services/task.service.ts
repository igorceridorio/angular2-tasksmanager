import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { FormGroup } from '@angular/forms';

import 'rxjs/add/operator/toPromise'

import { Task } from './task';
import { TASKS } from './mock-tasks';
import { Subtask } from './subtask';

@Injectable()
export class TaskService { 
    public task: Task;
    private tasksUrl = 'api/tasks';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getTasks(): Promise<Task[]> {
        return this.http.get(this.tasksUrl)
                .toPromise()
                .then(response => response.json().data as Task[])
                .catch(this.handleError);
    }

    getTask(id: number): Promise<Task> {
       const url = `${this.tasksUrl}/${id}`;
       return this.http.get(url)
       .toPromise()
       .then(response => response.json().data as Task)
       .catch(this.handleError);
    }

    addTask(task: Task) {
        TASKS.push(task);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error ocurred', error); // For demo purposes only
        return Promise.reject(error.message || error);
    }

    update(task: Task): Promise<Task> {
        const url = `${this.tasksUrl}/${task.id}`;
        return this.http
            .put(url, JSON.stringify(task), {headers: this.headers})
            .toPromise()
            .then(() => task)
            .catch(this.handleError);
    }

    create(myForm: FormGroup): Promise<Task>{
        this.task = myForm.value;
        return this.http
            .post(this.tasksUrl, JSON.stringify(this.task), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

}
