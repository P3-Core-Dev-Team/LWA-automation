import { ElementFinder, element, by, browser, } from "protractor";

export class LoginLocators {
    signin(arg0: string, arg1: string) {
        throw new Error("Method not implemented.");
    }


    getUrl = function () {
        return browser.get("http://192.168.1.80:4081/login");
    };
    getUsername = function () {
        return element(by.css("input[data-placeholder='User ID']"));
    };
    getPassword = function () {
        return element(by.css("input[data-placeholder='Password']"));
    };
    getLog = function () {
        return element(by.className('mat-raised-button mat-button-base mat-primary'));
    };


}


