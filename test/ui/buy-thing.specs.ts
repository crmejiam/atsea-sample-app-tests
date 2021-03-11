// import { doesNotMatch } from 'node:assert';
import { browser } from 'protractor';
/*
import  {MenuContentPage,
        LogInStepPage } from '../../src/page';
*/
describe('Open web page', () => {
    it('then should open a web page', async function(){
      await browser.get('http://localhost:8080/');
    });
  });
/*
describe('Login', () => {
it('then a user should be logged in', async () => {
    await LogInStepPage.fillForm('aperdomobo@gmail.com', 'WorkshopProtractor');
});
});

describe('Buy an item', async () => {
    const menuContentPage: MenuContentPage = new MenuContentPage();    
    it('then an item shoud be bought', async () =>{
        
        await menuContentPage.goToTShirtMenu();
    });
 
});
*/