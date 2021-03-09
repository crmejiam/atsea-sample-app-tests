import { get } from 'superagent';
import * as statusCode from 'http-status-codes';
import { expect } from 'chai';

const host = 'localhost:8080';

describe('Atsea Product Request API test', () => {
  let response;
  let product;
  describe('Get all products of atsea shop', () => {
    before(async () => {
      response = await get(`${host}/api/product/`);
    });
    it('Then all products should be listed', () => {
      expect(response.status).to.equal(statusCode.OK);
      expect(response.body.length).to.equal(9);
    });
  });
  describe('Get one single product of atsea shop', () => {
    before(async () => {
      response = await get(`${host}/api/product/3`);
      product = response.body;
    });
    it('Then product 3 should be obtained', () => {
      expect(product.productId).to.equal(3);
      expect(product.name).to.equal('Docker Tooling');
      expect(product.description).to.equal('Docker provides a whole suite of tools');
    });
  });
});
