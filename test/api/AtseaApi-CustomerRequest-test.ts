const agent = require('superagent');
const statusCode = require('http-status-codes');
const { expect } = require('chai');

const host = 'localhost:8080';

const register = {
  customerId: 0,
  name: 'Gordon Freeman',
  address: 'Black Mesa Research Facility',
  email: 'gfreeman@gmail.com',
  phone: '513 222 5555',
  username: 'gordonf',
  password: 'gordonpassword',
  enabled: 'true',
  role: 'USER'
};

describe('Atsea Customer Request API Test', () => {
  let response;
  let customerId;
  describe('Creating a customer user', () => {
    before(async () => {
      response = await agent.post(`${host}/api/customer/`)
        .send(register);
      customerId = response.body.customerId;
    });
    it('Then an user should be created', () => {
      expect(response.status).to.equal(statusCode.CREATED);
    });
  });
  describe('Getting a customer', () => {
    before(async () => {
      response = await agent.get(`${host}/api/customer/${customerId}`);
    });

    const userData = {
      customerId,
      name: 'Gordon Freeman',
      address: 'Black Mesa Research Facility',
      email: 'gfreeman@gmail.com',
      username: 'gordonf',
      phone: '513 222 5555'
    };

    it('Then an user should be obtained', () => {
      expect(response.status).to.equal(statusCode.OK);
      expect(response.body).to.equal(userData);
    });
  });
});
