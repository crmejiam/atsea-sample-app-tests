import { $, ElementFinder, browser } from 'protractor';

export class LogInStepPage {
  private login :ElementFinder;
  private signIn: ElementFinder;
  private user: ElementFinder;
  private pass: ElementFinder;

  constructor() {
    this.login = $('.buttonSection > div > button:nth-child(2)');
    this.user = $('.loginFormRow > div:nth-child(2) > div:nth-child(1)');
    this.pass = $('.loginFormRow > div:nth-child(2) > div:nth-child(1)');
    this.signIn = $('html body.ReactModal__Body--open div.ReactModalPortal div.ReactModal__Overlay.ReactModal__Overlay--after-open div.ReactModal__Content.ReactModal__Content--after-open div.formContainer div.loginFormContent form div.loginFormButton button div span');
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
  }
}
