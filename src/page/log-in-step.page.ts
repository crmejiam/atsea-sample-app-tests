import { $, ElementFinder, browser } from 'protractor';

export class LogInStepPage {
  private login :ElementFinder;
  private signIn: ElementFinder;
  private user: ElementFinder;
  private pass: ElementFinder;

  constructor() {
    this.login = $('.buttonSection > div > button:nth-child(2)');
    this.user = $('.loginFormRow > div:nth-child(1) > div > input');
    this.pass = $('.loginFormRow > div:nth-child(2) > div > input');
    this.signIn = $('.loginFormButton > button:nth-child(1)');
  }
  public async goToLogin(){
    browser.sleep(5000);
    await this.login.click();
  }

  public async fillForm(mail, passwd): Promise<void> {    
    browser.sleep(50000);
    await this.user.sendKeys(mail);
    browser.sleep(50000);
    await this.pass.sendKeys(passwd); 
  }

  public async singin(){
    browser.sleep(5000);
    await this.signIn.click();
    browser.sleep(50000);
  }
}
