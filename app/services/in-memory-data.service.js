"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var tasks = [
            { id: 1, name: 'First task', subtasks: [{ id: 1, name: 'First subtask' }], priority: 'low' },
            { id: 2, name: 'Second task', subtasks: [{ id: 1, name: 'First subtask' }, { id: 2, name: 'Second subtask' }], priority: 'high' }
        ];
        return { tasks: tasks };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map