import { get, post, del } from 'superagent';
import { StatusCodes } from 'http-status-codes';
import { expect } from 'chai';

const host = 'localhost:8080';
let response;
let customerId;

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
  describe('Creating a customer user', () => {
    before(async () => {
      response = await post(`${host}/api/customer/`)
        .set('User-Agent', 'agent')
        .set('Content-Type', 'application/json')
        .send(register);
      customerId = response.body.customerId;
    });
    it('Then an user should be created', () => {
      expect(response.status).to.equal(StatusCodes.CREATED);
    });
  });
  describe('Getting a customer', () => {
    before(async () => {
      response = await get(`${host}/api/customer/${customerId}`)
        .set('User-Agent', 'agent');
    });

    it('Then a customer should be obtained', () => {
      expect(response.status).to.equal(StatusCodes.OK);
      expect(response.body.email).to.equal('gfreeman@gmail.com');
      expect(response.body.username).to.equal('gordonf');
      expect(response.body.customerIf).to.equal(customerId);
    });
  });

  describe('Deleting a customer', () => {
    before(async () => {
      response = await del(`${host}/api/customer/${customerId}`);
    });
    it('Then an customer should be deleted', () => {
      expect(response.status).to.equal(StatusCodes.NO_CONTENT);
    });
  });
});
