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
// Angular Imports
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
// This Module's Components
var new_task_component_1 = require('./new-task.component');
var NewTaskModule = (function () {
    function NewTaskModule() {
    }
    NewTaskModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule
            ],
            declarations: [
                new_task_component_1.NewTaskComponent,
            ],
            exports: [
                new_task_component_1.NewTaskComponent,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], NewTaskModule);
    return NewTaskModule;
}());
exports.NewTaskModule = NewTaskModule;
//# sourceMappingURL=new-task.module.js.map