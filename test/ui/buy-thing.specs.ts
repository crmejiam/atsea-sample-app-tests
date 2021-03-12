// import { doesNotMatch } from 'node:assert';
import { browser } from 'protractor';
import { post } from 'superagent';
import * as chai from 'chai';
import { StatusCodes } from 'http-status-codes';
import { customerSetup, customerTeardown } from '../Tests-Setup&Teardown';
import  { LogInStepPage } from '../../src/page';
let response;
let customer;
const expect = chai.expect;
const host = 'localhost:8080'

const register = {
  customerId: 22,
  name: 'Gordon Freeman',
  address: 'Black Mesa Research Facility',
  email: 'gfreeman@gmail.com',
  phone: '513 222 5555',
  username: 'gordonf',
  password: 'gordonpassword',
  enabled: 'true',
  role: 'USER'
};
describe('Creating an user', () => {
  before(async () => {
    response = await post(`${host}/api/customer/`)
          .set('User-Agent', 'agent')
          .set('Content-Type', 'application/json')
          .send(register);
        customer = response.body;      
  }); 
  
  it('Then an user should be created', () => {
    expect(response.status).to.equal(StatusCodes.CREATED);
  });
});

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
    it('then a user should be logged in', async () => {
        await logInStepPage.fillForm(customer.username, customer.password);
    });
  });
  /*
  describe('Buy an item', async () => {
      const menuContentPage: MenuContentPage = new MenuContentPage();    
      it('then an item shoud be bought', async () =>{
          
          await menuContentPage.goToTShirtMenu();
      });
  
  });
  */

});