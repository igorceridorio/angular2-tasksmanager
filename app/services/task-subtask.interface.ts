export interface TaskInterface {
    id: number;
    name: string;
    subtasks: SubtaskInterface[];
    priority: string;
}

export interface SubtaskInterface {
    id: number;
    name: string;
}