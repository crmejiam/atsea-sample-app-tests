// import { doesNotMatch } from 'node:assert';
import { browser } from 'protractor';
// import { post } from 'superagent';
import * as chai from 'chai';
// import { StatusCodes } from 'http-status-codes';
import { customerSetup, customerTeardown} from '../Tests-Setup&Teardown';
import  { LogInStepPage,
          AddItemStepPage,
          PaymentStepPage } from '../../src/page';

let customer = customerSetup();
const expect = chai.expect;

describe('When buying a thing', () => {

  describe('When entering the website', () => {

    beforeEach(async () => {
      await browser.get(`http://192.168.10.16:8080`);  
      await browser.sleep(3000);        
    });        

    it('then should have a title', async () => {
      await browser.sleep(3000);
      const title = await browser.getTitle();
      expect(title).to.equal('Atsea Shop');
    });
  }); 

  describe('Login', () => {
    const logInStepPage: LogInStepPage = new LogInStepPage();
    it('then should go to the login page', async () => {
      await logInStepPage.goToLogin();
    });
    it('then credentials should be filled', async () => {
      await logInStepPage.fillForm(customer.username, customer.password);
    });
    it('then a user should be logged in', async () => {
      await logInStepPage.singin();
    });

  });

  describe('Adding an item', () =>{
    const addItemStepPage: AddItemStepPage = new AddItemStepPage();
    it('then an item should be added', async () => {
      await addItemStepPage.addElement();
    });
  });

  describe('Making a payment', () =>{
    const paymentStepPage: PaymentStepPage = new PaymentStepPage();
    it('then it should go to cart', async () => {
      await paymentStepPage.goToCart();
    });
    it('then it should fill the credit information', async () => {
      //await paymentStepPage.fillCreditInfo('J', 'Smith', '123456', '123', '1/2/2003');
      await paymentStepPage.fillCreditInfo('J', 'Smith');
    });
    it('then it should fill the billing card information', async () => {
      // await paymentStepPage.fillBillingInfo('Perficient', 'Developer', 'Somewhere', 'Medellin');
    });    
    it('then it should complete the order', async () => {
      await paymentStepPage.completeOrder();
      // expect(final).to.equal('You have successfully placed an order!');
    });

  });  
});
customerTeardown();
