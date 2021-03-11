import { get, post, del } from 'superagent';
import { StatusCodes } from 'http-status-codes';
import { expect } from 'chai';

const host = 'localhost:8080';
const today = new Date();
today.setTime(today.getTime() + 300 * 60 * 1000);
const month = (today.getMonth() + 1).toString().padStart(2, '0');
const currentDate = `${today.getFullYear()}-${month}-${today.getDate()}`;

const order = {
  orderId: 0,
  orderDate: currentDate,
  customerId: 0,
  productsOrdered: { 1: 1, 2: 2, 3: 3 }
};

describe('Atsea Order Request API Test', () => {
  let orderId;
  let response;
  describe('Creating an order', () => {
    before(async () => {
      response = await post(`${host}/api/order/`)
        .set('User-Agent', 'agent')
        .set('Content-Type', 'application/json')
        .send(order);
      orderId = response.body.orderId;
      order.orderId = orderId;
    });
    it('Then an order should be placed', () => {
      expect(response.status).to.equal(StatusCodes.CREATED);
    });
  });
  describe('Getting an order from the orderId', () => {
    before(async () => {
      response = await get(`${host}/api/order/${orderId}`)
        .set('User-Agent', 'agent')
        .set('Content-Type', 'application/json');
    });
    it('Then an order should be obtained', () => {
      expect(response.status).to.equal(StatusCodes.OK);
      expect(response.body.orderId).to.equal(order.orderId);
      expect(response.body.customerId).to.equal(order.customerId);
      expect(response.body).to.have.deep.property('productsOrdered', order.productsOrdered);
    });
  });
  describe('Deleting an order', () => {
    before(async () => {
      response = await del(`${host}/api/order/${orderId}`);
    });
    it('Then an order should be deleted', () => {
      expect(response.status).to.equal(StatusCodes.NO_CONTENT);
    });
  });
});
