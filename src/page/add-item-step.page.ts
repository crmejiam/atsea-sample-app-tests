import { $, ElementFinder, browser } from 'protractor';

export class AddItemStepPage {
  private element :ElementFinder;  

  constructor() {
    this.element = $('.productListWrapper > div:nth-child(4) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button:nth-child(1) > div:nth-child(1) > span:nth-child(1)');    
  }
  public async addElement(){
    browser.sleep(5000);
    await this.element.click();
  }
}
