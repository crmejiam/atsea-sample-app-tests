import { $, ElementFinder } from 'protractor';

export class LogInStepPage {
  private signIn: ElementFinder;
  private user: ElementFinder;
  private pass: ElementFinder;

  constructor() {
    this.user = $('#email');
    this.pass = $('#passwd');
    this.signIn = $('#SubmitLogin > span');
  }

  public async fillForm(mail, passwd): Promise<void> {
    await this.user.sendKeys(mail);
    await this.pass.sendKeys(passwd);
    await this.signIn.click();
  }
}
