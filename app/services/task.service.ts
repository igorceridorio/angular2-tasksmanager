import { Injectable } from '@angular/core';

import { Task } from './task';
import { TASKS } from './mock-tasks';
import { Subtask } from './subtask';

@Injectable()
export class TaskService { 
    public task: Task;

    getTasks(): Promise<Task[]> {
        return Promise.resolve(TASKS);
    }

    getTask(id: number): Promise<Task> {
        return this.getTasks().then(tasks => tasks.find(task => task.id === id));
    }

}
