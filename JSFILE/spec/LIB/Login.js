"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginLocators = void 0;
var protractor_1 = require("protractor");
var LoginLocators = /** @class */ (function () {
    function LoginLocators() {
        this.getUrl = function () {
            return protractor_1.browser.get("http://192.168.1.80:4081/login");
        };
        this.getUsername = function () {
            return protractor_1.element(protractor_1.by.css("input[data-placeholder='User ID']"));
        };
        this.getPassword = function () {
            return protractor_1.element(protractor_1.by.css("input[data-placeholder='Password']"));
        };
        this.getLog = function () {
            return protractor_1.element(protractor_1.by.className('mat-raised-button mat-button-base mat-primary'));
        };
    }
    LoginLocators.prototype.signin = function (arg0, arg1) {
        throw new Error("Method not implemented.");
    };
    return LoginLocators;
}());
exports.LoginLocators = LoginLocators;
