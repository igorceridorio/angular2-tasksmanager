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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
// Import the service used in the app
var task_service_1 = require('../services/task.service');
var NewTaskComponent = (function () {
    function NewTaskComponent(taskService, route, location, _fb) {
        this.taskService = taskService;
        this.route = route;
        this.location = location;
        this._fb = _fb;
    }
    NewTaskComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            id: ['', [forms_1.Validators.required]],
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            subtasks: this._fb.array([
                this.initSubtask(),
            ]),
            priority: ['', [forms_1.Validators.required]]
        });
    };
    NewTaskComponent.prototype.initSubtask = function () {
        return this._fb.group({
            id: ['', [forms_1.Validators.required]],
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]]
        });
    };
    NewTaskComponent.prototype.addSubtask = function () {
        var control = this.myForm.controls['subtasks'];
        control.push(this.initSubtask());
    };
    NewTaskComponent.prototype.removeSubtask = function (i) {
        var control = this.myForm.controls['subtasks'];
        control.removeAt(i);
    };
    /*save(model: TaskInterface) {
        // call the API to save data
        // ...
        console.log(model);
        
    }*/
    NewTaskComponent.prototype.save = function () {
        var _this = this;
        this.taskService.create(this.myForm).then(function () { return _this.goBack(); });
    };
    NewTaskComponent.prototype.saveTask = function (myForm) {
        this.taskService.addTask(myForm.value);
        this.location.back();
    };
    NewTaskComponent.prototype.goBack = function () {
        this.location.back();
    };
    NewTaskComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'new-task',
            templateUrl: 'new-task.component.html',
            styleUrls: [],
            providers: [task_service_1.TaskService]
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService, router_1.ActivatedRoute, common_1.Location, forms_1.FormBuilder])
    ], NewTaskComponent);
    return NewTaskComponent;
}());
exports.NewTaskComponent = NewTaskComponent;
//# sourceMappingURL=new-task.component.js.map