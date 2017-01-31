import { Task } from './task'

export const TASKS: Task[] = [
    {id: 1, name: 'First task', subtasks: [{id: 1, name: 'First subtask'}], priority: 'low'},
    {id: 2, name: 'Second task', subtasks: [{id: 1, name: 'First subtask'}, {id: 2, name: 'Second subtask'}], priority: 'high'}
];