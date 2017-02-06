import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let tasks = [
            {id: 1, name: 'First task', subtasks: [{id: 1, name: 'First subtask'}], priority: 'low'},
            {id: 2, name: 'Second task', subtasks: [{id: 1, name: 'First subtask'}, {id: 2, name: 'Second subtask'}], priority: 'high'}
        ];
        return {tasks};
    }
}