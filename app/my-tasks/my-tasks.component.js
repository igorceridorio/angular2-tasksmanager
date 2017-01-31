"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// Import the service used in the app
var task_service_1 = require('../services/task.service');
var MyTasksComponent = (function () {
    function MyTasksComponent(taskService) {
        this.taskService = taskService;
    }
    MyTasksComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getTasks().then(function (tasks) { return _this.tasks = tasks; });
    };
    MyTasksComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    MyTasksComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-tasks',
            template: "\n        <h2>My tasks</h2>\n        <ul class=\"tasks\">\n            <li *ngFor=\"let task of tasks\">\n            <span>ID: {{task.id}} - Name: {{task.name}} - Priority: {{task.priority}}</span>\n            </li>\n        </ul>\n        ",
            templateUrl: 'my-tasks.component.html',
            styleUrls: [],
            providers: [task_service_1.TaskService]
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], MyTasksComponent);
    return MyTasksComponent;
}());
exports.MyTasksComponent = MyTasksComponent;
//# sourceMappingURL=my-tasks.component.js.map