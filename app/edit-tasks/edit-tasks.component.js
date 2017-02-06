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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
require('rxjs/add/operator/switchMap');
// Import the service used in the app
var task_service_1 = require('../services/task.service');
// Import the directives used in the app
var task_1 = require('../services/task');
var EditTasksComponent = (function () {
    function EditTasksComponent(taskService, route, location) {
        this.taskService = taskService;
        this.route = route;
        this.location = location;
    }
    EditTasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) { return _this.taskService.getTask(+params['id']); }).subscribe(function (task) { return _this.task = task; });
    };
    EditTasksComponent.prototype.save = function (task) {
        var _this = this;
        this.taskService.update(task)
            .then(function () { return _this.goBack(); });
    };
    EditTasksComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', task_1.Task)
    ], EditTasksComponent.prototype, "task", void 0);
    EditTasksComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-tasks',
            templateUrl: 'edit-tasks.component.html',
            styleUrls: []
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService, router_1.ActivatedRoute, common_1.Location])
    ], EditTasksComponent);
    return EditTasksComponent;
}());
exports.EditTasksComponent = EditTasksComponent;
//# sourceMappingURL=edit-tasks.component.js.map