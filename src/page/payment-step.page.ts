import { $, ElementFinder, browser } from 'protractor';
import * as chai from 'chai';
var expect = chai.expect;

export class PaymentStepPage {
  private cart :ElementFinder;
  private first_name: ElementFinder;
  private last_name: ElementFinder;
  // private card_number: ElementFinder;
  // private cvv: ElementFinder;
  // private date: ElementFinder;
  private company: ElementFinder;
  private title: ElementFinder;
  private adress: ElementFinder;
  private city: ElementFinder;
  private complete: ElementFinder;
  private message: ElementFinder;

  constructor() {
    this.cart = $('.checkout-button > a:nth-child(1)'); 
    this.first_name = $('.infoSection > form:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input');    
    this.last_name = $('.infoSection > form:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > input');
    // this.card_number = $('.infoSection > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > input');
    // this.cvv = $('infoSection > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > input');
    // this.date = $('div.infoRow:nth-child(4) > div:nth-child(1) > div:nth-child(1) > input');
    this.company = $('.infoSection > form:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input');
    this.title = $('.infoSection > form:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > input');
    this.adress = $('.infoSection > form:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > input');
    this.city = $('.infoSection > form:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > input');
    this.complete = $('.infoButton > button:nth-child(2)');
    this.message = $('.successMessage');
  }
  public async goToCart(){
    browser.sleep(5000);
    await this.cart.click();
  }
  /*
  public async fillCreditInfo(name, last, card, cv, datee){
    browser.sleep(5000);
    await this.first_name.sendKeys(name);
    browser.sleep(5000);
    await this.last_name.sendKeys(last);
    browser.sleep(5000);
    await this.card_number.sendKeys(card);
    browser.sleep(5000);
    await this.cvv.sendKeys(cv);
    browser.sleep(5000);
    await this.date.sendKeys(datee);
    browser.sleep(5000);
  }*/
  public async fillCreditInfo(name, last){
    browser.sleep(5000);
    await this.first_name.sendKeys(name);
    browser.sleep(5000);
    await this.last_name.sendKeys(last);
    browser.sleep(5000);
    //await this.card_number.sendKeys(card);
    browser.sleep(5000);
    // await this.cvv.sendKeys(cv);
    browser.sleep(5000);
    // await this.date.sendKeys(datee);
    browser.sleep(5000);
  }
  public async fillBillingInfo(comp, titl, addr, cit){
    browser.sleep(5000);
    await this.company.sendKeys(comp);
    browser.sleep(5000);
    await this.title.sendKeys(titl);
    browser.sleep(5000);
    await this.adress.sendKeys(addr);
    browser.sleep(5000);
    await this.city.sendKeys(cit);
    browser.sleep(5000);
  }
  public async completeOrder(){
    browser.sleep(5000);
    await this.complete.click();
    browser.sleep(5000);
    const msg = await this.message.getText();
    browser.sleep(5000);
    expect(msg).to.equal('You have successfully placed an order!');
    browser.sleep(5000);
  }
}
