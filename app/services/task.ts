import { Subtask } from './subtask'

export class Task {
    id: number;
    name: string;
    subtasks: Subtask[];
    priority: string;
}