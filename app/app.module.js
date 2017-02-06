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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
// Components used in the app
var app_component_1 = require('./app.component');
var my_tasks_component_1 = require('./my-tasks/my-tasks.component');
var edit_tasks_component_1 = require('./edit-tasks/edit-tasks.component');
var new_task_component_1 = require('./new-task/new-task.component');
// Services used in the app
var task_service_1 = require('./services/task.service');
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var in_memory_data_service_1 = require('./services/in-memory-data.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: '/my-tasks', pathMatch: 'full' },
                    { path: 'my-tasks', component: my_tasks_component_1.MyTasksComponent },
                    { path: 'edit-tasks', component: edit_tasks_component_1.EditTasksComponent },
                    { path: 'new-task', component: new_task_component_1.NewTaskComponent }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                edit_tasks_component_1.EditTasksComponent,
                my_tasks_component_1.MyTasksComponent,
                new_task_component_1.NewTaskComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [task_service_1.TaskService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map