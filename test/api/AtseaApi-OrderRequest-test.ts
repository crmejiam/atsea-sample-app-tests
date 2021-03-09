import { get, post, del } from 'superagent';
import * as statusCode from 'http-status-codes';
import { expect } from 'chai';

const host = 'localhost:8080';

const order = {
  orderId: 0,
  orderDate: '2017-02-28T19:52:39Z',
  customerId: 0,
  productsOrdered: { 1: 1, 2: 2, 3: 3 }
};

describe('Atsea Order Request API Test', () => {
  let orderId;
  let response;
  describe('Creating an order', () => {
    before(async () => {
      response = await post(`${host}/api/order/`)
        .send(order);
      orderId = response.body.orderId;
    });
    it('Then an order should be placed', () => {
      expect(response.status).to.equal(statusCode.CREATED);
    });
  });
  describe('Getting an order from the orderId', () => {
    before(async () => {
      response = await get(`${host}/api/order/${orderId}`);
    });
    it('Then an order should be obtained', () => {
      expect(response.status).to.equal(statusCode.OK);
      expect(response.body).to.equal(order);
    });
  });
  describe('Deleting an order', () => {
    before(async () => {
      response = await del(`${host}/api/order/${orderId}`);
    });
    it('Then an order should be deleted', () => {
      expect(response.status).to.equal(statusCode.NO_CONTENT);
    });
  });
});
