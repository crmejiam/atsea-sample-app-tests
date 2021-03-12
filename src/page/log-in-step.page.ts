import { $, ElementFinder } from 'protractor';

export class LogInStepPage {
  private login :ElementFinder;
  private signIn: ElementFinder;
  private user: ElementFinder;
  private pass: ElementFinder;

  constructor() {
    this.login = $('.buttonSection > div:nth-child(1) > button:nth-child(2) > div:nth-child(1) > span:nth-child(1)')
    this.user = $('#username-Username-undefined-40813');
    this.pass = $('#password-Password-undefined-52427');
    this.signIn = $('html body.ReactModal__Body--open div.ReactModalPortal div.ReactModal__Overlay.ReactModal__Overlay--after-open div.ReactModal__Content.ReactModal__Content--after-open div.formContainer div.loginFormContent form div.loginFormButton button div span');
  }

  public async fillForm(mail, passwd): Promise<void> {
    await this.login.click();
    await this.user.sendKeys(mail);
    await this.pass.sendKeys(passwd);
    await this.signIn.click();
  }
}
