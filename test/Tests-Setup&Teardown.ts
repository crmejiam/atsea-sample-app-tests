import { post, del } from 'superagent';
import { expect } from 'chai';
import { StatusCodes } from 'http-status-codes';

export function customerSetup() {
  const host = 'localhost:8080';
  let response;
  let customerId;
  let register = {
    customerId: 0,
    name: 'Gordon Freeman',
    address: 'Black Mesa Research Facility',
    email: 'gfreeman@gmail.com',
    phone: (Math.floor(Math.random()*(9999999999-1000000000))+1000000000).toString(),
    username: 'g',
    password: 'p',
    enabled: 'true',
    role: 'USER'
  };
  describe('Setup Customer', () => {
    before(async () => {
      response = await post(`${host}/api/customer/`)
        .set('User-Agent', 'agent')
        .set('Content-Type', 'application/json')
        .send(register);
      customerId = response.body.customerId;
    });
    it('Customer created successfully', () => {
      expect(response.status).to.equal(StatusCodes.CREATED);
    });
  });
  register.customerId = customerId;
  return register;
};

export function customerTeardown() {
  let response;
  
  describe('Tearing down the Customes', () => {
    before(async () => {
      response = await del(`localhost:8080/api/customer/`)
      .set('User-Agent', 'agent')
    });
    it('Then all customers sould be deleted', () => {
      expect(response.status).to.equal(StatusCodes.NO_CONTENT);
    });
  });

};
