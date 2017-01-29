"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var User_1 = require("../shared/models/User");
var UserFormComponent = (function () {
    function UserFormComponent() {
        this.newUser = new User_1.User();
    }
    return UserFormComponent;
}());
UserFormComponent = __decorate([
    core_1.Component({
        selector: 'user-form',
        styles: ["form { padding:10px; background: #eee; border-radius:3px; margin-bottom: 30px; }"],
        template: "\n        <form #form=\"ngForm\">\n\n          {{ form.valid }}\n          <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" name=\"name\" required\n                [(ngModel)]=\"newUser.name\" #name=\"ngModel\">\n          </div>\n          <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" name=\"username\" required\n                [(ngModel)]=\"newUser.username\" #username=\"ngModel\">\n          </div>\n\n          <button type=\"submit\" class=\"btn btn-lg btn-block btn-primary\" [disabled]=\"form.invalid\">\n            Create User\n          </button>\n\n        </form>\n    "
    })
], UserFormComponent);
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map