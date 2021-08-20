import { LoginLocators } from '../LIB/Login';
import{ appcreation }from'../LIB/applicationcreation';
import { browser, logging, ElementFinder } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { rexcel } from '../POM/excel';

describe('TS_002 application creation ', () => {
    let sleep = 3000;
    let x= new rexcel();
    
    let Signin = new LoginLocators();
    let Appcreate =new appcreation();
  
  browser.ignoreSynchronization=true;

  beforeEach(function ()  {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
  });

  it('TC_001: Open LWA URL LAUNCH', async () => {
    Signin.getUrl();
    browser.driver.manage().window().maximize();
    browser.sleep(6000);
    browser.getCurrentUrl().then(function (url) {
        console.log("Web page url is : " + url)
    })
    browser.getTitle().then(function (title) {
        console.log("Web page title is : " + title)
    })

    Signin.getUsername().sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 3, 1));
    Signin.getPassword().sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 3, 2));
    Signin.getLog().click();
    browser.sleep(3000);
           
    })
    it('TC_002:Create application ',async () =>{
        
Appcreate.addapplication.click();
browser.sleep(2000);
// sendKeys(x.readExcel("testdata.xlsx","sheet1",4,1));
  Appcreate.clickappname.sendKeys(x.readExcel("testdata.xlsx","Sheet1",4,1));  
 browser.sleep(2000);  
 Appcreate.apparrow.click(); 
 browser.sleep(8000);    
 Appcreate.apptype.click();
 browser.sleep(3000);  
//  Appcreate.appdesc.sendKeys(x.readExcel("testdata.xlsx","Sheet1",4,2));  
//  browser.sleep(2000);
//  Appcreate.appcategory.sendKeys(x.readExcel("testdata.xlsx","Sheet1",4,3));
//  browser.sleep(2000);
//  Appcreate.create.click();
        })
    })
    
