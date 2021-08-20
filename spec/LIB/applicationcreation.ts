import { element, by, ElementFinder } from "protractor";
export class appcreation{

    addapplication: ElementFinder;
     clickappname: ElementFinder;
     apparrow: ElementFinder;
     apptype:ElementFinder;
     appdesc:ElementFinder;
    appcategory:ElementFinder;
     create:ElementFinder;

    constructor(){
        this.addapplication=element(by.xpath("//*[contains(text(),'add_circle')]"));
      this.clickappname=element.all(by.css("input[class*='mat-input-element']")).get(1);
      this.apparrow=element.all(by.css("div[class*='mat-select-arrow']")).get(3);
        this.apptype=element.all(by.xpath("//*[contains(text(),'Active Archiving')]")).get(0);
       this.appdesc=element.all(by.css("input[class*='mat-input-element']")).get(0);
      this.appcategory=element.all(by.css("input[class*='mat-input-element']")).get(2);
      this.create = element(by.xpath("//span[text()='Create ']"));
    //     this.appcategory=element(by.xpath)
    }
}