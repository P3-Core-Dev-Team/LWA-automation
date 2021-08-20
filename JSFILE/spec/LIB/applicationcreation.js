"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appcreation = void 0;
var protractor_1 = require("protractor");
var appcreation = /** @class */ (function () {
    function appcreation() {
        this.addapplication = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'add_circle')]"));
        this.clickappname = protractor_1.element.all(protractor_1.by.css("input[class*='mat-input-element']")).get(1);
        this.apparrow = protractor_1.element.all(protractor_1.by.css("div[class*='mat-select-arrow']")).get(2);
        this.apptype = protractor_1.element.all(protractor_1.by.xpath("//*[contains(text(),'Active Archiving')]")).get(0);
        this.appdesc = protractor_1.element.all(protractor_1.by.css("input[class*='mat-input-element']")).get(0);
        this.appcategory = protractor_1.element.all(protractor_1.by.css("input[class*='mat-input-element']")).get(2);
        this.create = protractor_1.element(protractor_1.by.xpath("//span[text()='Create ']"));
        //     this.appcategory=element(by.xpath)
    }
    return appcreation;
}());
exports.appcreation = appcreation;
