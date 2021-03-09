const agent = require('superagent');
const statusCode = require('http-status-codes');
const { expect } = require('chai');

const host = 'localhost:8080';

const credentials = {
  username: 'gordonf',
  password: 'gordonpassword'
};

describe('Atsea Login and Purchase API tests', () => {
  let response;
  describe('Logging in with an existing user', () => {
    before(async () => {
      response = await agent.post(`${host}/login/`)
        .send(credentials);
    });
    it('Then the user should be logged in', () => {
      expect(response.state).to.equal(statusCode.OK);
    });
  });
  describe('Purchasing an item', () => {
    before(async () => {
      response = await agent.get(`${host}/purchase/`);
    });
    it('Then the purchase should be made', () => {
      expect(response.state).to.equal(statusCode.OK);
      expect(response.message).to.equal("Thank you for shopping @Sea! We're sending a confirmation email shortly and getting your order ready!");
    });
  });
  describe('Deleting a user', () => {
    before(async () => {
      response = await agent.delete(`${host}/api/customer/0`);
    });
    it('Then an user should be deleted', () => {
      expect(response.status).to.equal(statusCode.NOCONTENT);
    });
  });
});
