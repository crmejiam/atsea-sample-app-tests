const agent = require('superagent');
const statusCode = require('http-status-codes');
const { expect } = require('chai');

host = "localhost:8080"

const order = {
    "orderId" : 0,
    "orderDate" : "2017-02-28T19:52:39Z",
    "customerId" : customerId,
    "productsOrdered" : {"1":1, "2":2, "3":3}
}


describe('Atsea Order Request API Test', () => {
    let orderId;
    describe('Creating an order', () => {
        before(async() => {
            response = await agent.post(`${host}/api/order/`)
            .send(order);
            orderId = response.body.orderId;
        })
        it ('Then an order should be placed', () => {
            expect(response.status).to.equal(statusCode.CREATED)
        })
    })
    describre('Getting an order from the orderId', () => {
        before(async() => {
            response = await agent.get(`${host}/api/order/${orderId}`);
        })
        it('Then an order should be obtained', () => {
            expect(response.status).to.equal(statusCode.OK);
            expect(response.body).to.equal(order);
        })
    })
    describe('Deleting an order', () => {
        before(async() => {
            response = await agent.delete(`${host}/api/order/${orderId}`);
        })
        it('Then an order should be deleted', () => {
            expect(response.status).to.equal(statusCode.NOCONTENT);
        })
    })
})