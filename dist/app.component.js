"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.message = 'Hello!';
        this.users = [
            { id: 1, name: 'Andre', username: 'ap080221063' },
            { id: 2, name: 'Bruno', username: 'br080321123' },
            { id: 3, name: 'Hugo', username: 'hg080244455' }
        ];
    }
    AppComponent.prototype.selectUser = function (user) {
        this.activeUser = user;
        console.log(this.activeUser);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n<header>\n    <nav class=\"navbar navbar-inverse\">\n        <div class=\"navbar-header\">\n            <a href=\"/\" class=\"navbar-brand\">My Angular 2 App!</a>\n        </div>\n    </nav>\n<header>\n\n<main>\n\n    <div class=\"row\">\n        <div class=\"col-sm-4\">\n           <div *ngIf=\"users\">\n               <ul class=\"list-group users-list\">\n                   <li class=\"list-group-item\" *ngFor=\"let user of users\"\n                    (click)=\"selectUser(user)\"\n                    [class.active]=\"user === activeUser\"\n                    >\n                       {{ user.name }} - ({{user.username}})\n                   </li>\n               </ul>\n           </div>\n        </div>\n        <div class=\"col-sm-8\">\n            <div class=\"jumbotron\" *ngIf=\"activeUser\">\n                <!--<h1>Welcome to our APP!</h1>-->\n                <!--<p>{{ message }}</p>-->\n                    <h2>{{ activeUser.name }} <small> {{activeUser.username}}</small></h2>\n            </div>\n\n            <div class=\"jumbotron gocrazy\" *ngIf=\"!activeUser\">\n                <span class=\"glyphicon glyphicon-hand-left\"></span>\n                <h2>Choose a User</h2>\n            </div>\n        </div>\n    </div>\n\n    <!--<p>The user is {{ user.name }} ({{user.username}}).</p>-->\n\n</main>\n\n<footer class=\"text-center\">\n    Copyright &copy; 2017\n</footer>\n    ",
        styles: ["\n      .jumbotron {box-shadow: 0 2px 0 rgba(0,0,0,0.2)}\n      .users-list li { cursor: pointer; }\n      .jumbotron .glyphicon { font-size:80px;}\n      .gocrazy { background: MistyRose; color:Black;}\n\n    "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map