import { get } from 'superagent';
import { StatusCodes } from 'http-status-codes';
import { expect } from 'chai';

const host = `http://3.142.215.210:8080`;

describe('Atsea System Utilities API tests', () => {
  let response;
  const today = new Date();
  today.setTime(today.getTime() + 300 * 60 * 1000);
  const hour = `${today.getHours().toString().padStart(2, '0')}:${today.getMinutes().toString().padStart(2, '0')}`;
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const currentDate = `${today.getFullYear()}-${month}-${today.getDate()} ${hour}`;
  describe('Checking the database health', () => {
    before(async () => {
      response = await get(`${host}/utility/healthcheck/`);
    });
    it('Then the database health should be checked', () => {
      expect(response.status).to.equal(StatusCodes.OK);
      expect(response.body.status).to.equal(currentDate);
    });
  });
});
