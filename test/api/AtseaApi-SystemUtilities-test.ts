import { get } from 'superagent';
import * as statusCode from 'http-status-codes';
import { expect } from 'chai';

const host = 'localhost:8080';

describe('Atsea System Utilities API tests', () => {
  let response;
  const today = new Date();
  const hour = `${today.getHours()}:${today.getMinutes()}`;
  const currentDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} ${hour}`;
  describe('Checking the database health', () => {
    before(async () => {
      response = await get(`${host}/utility/healthcheck/`);
    });
    it('Then the database health should be checked', () => {
      expect(response.status).to.equal(statusCode.OK);
      expect(response.body.status).to.equal(currentDate);
    });
  });
});
