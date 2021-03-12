// import { doesNotMatch } from 'node:assert';
import { browser } from 'protractor';
// import { post } from 'superagent';
import * as chai from 'chai';
// import { StatusCodes } from 'http-status-codes';
import { customerSetup, customerTeardown} from '../Tests-Setup&Teardown';
import  { LogInStepPage,
          AddItemStepPage } from '../../src/page';

let customer = customerSetup();
const expect = chai.expect;
const host = 'localhost:8080'

describe('When buying a thing', () => {

  describe('When entering the website', () => {

    before(async () => {
      await browser.get(`http://${host}`);          
    });    

    it('then should have a title', async () => {
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
  
  
});
customerTeardown();
