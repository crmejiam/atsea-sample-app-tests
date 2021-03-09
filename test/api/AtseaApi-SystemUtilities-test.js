const agent = require('superagent');
const statusCode = require('http-status-codes');
const { expect } = require('chai');

host = "localhost:8080"

describe('Atsea System Utilities API tests', () => {
    let response
    var today = new Date();
    var hour = today.getHours() + ":" + today.getMinutes();
    var currentDate = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate() + " " + hour;
    describe('Checking the database health', () => {
        before(async() => {
            response = await agent.get(`${host}/utility/healthcheck/`);
        })
        it('Then the database health should be checked', () => {
            expect(response.status).to.equal(statusCode.OK);
            expect(response.body.status).to.equal(currentDate);
        })
    })
})