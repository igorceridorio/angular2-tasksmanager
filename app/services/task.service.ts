import { Injectable } from '@angular/core';

import { Task } from './task';
import { TASKS } from './mock-tasks';
import { Subtask } from './subtask';

@Injectable()
export class TaskService { 
    getTasks(): Promise<Task[]> {
        return Promise.resolve(TASKS);
    }

    getTask(id: number): Promise<Task> {
        return this.getTasks().then(subtasks => subtasks.find(task => task.id === id));
    }
}
