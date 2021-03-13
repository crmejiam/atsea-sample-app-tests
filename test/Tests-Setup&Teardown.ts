import { post, del } from 'superagent';
import { expect } from 'chai';
import { StatusCodes } from 'http-status-codes';

export function customerSetup() {
  // Para que funcione es necesario poner tu IP privada en el host, ademaś de activar el selenium grid
  const host = 'http://192.168.1.26:8080';    // Cristian's IP
  let response;
  let customerId;
  let register = {
    customerId: 0,
    name: 'Gordon Freeman',
    address: 'Black Mesa Research Facility',
    email: 'gfreeman@gmail.com',
    phone: '535 333 5555',
    username: Math.random().toString(36).substring(7).charAt(0),
    password: Math.random().toString(36).substring(7).charAt(0),
    enabled: 'true',
    role: 'USER'
  };
  describe('Setup Customer', () => {
    before(async () => {
      response = await post(`${host}/api/customer/`)
        .set('User-Agent', 'agent')
        .set('Content-Type', 'application/json')
        .send(register);
      customerId = response.body.customerId;
    });
    it('Customer created successfully', () => {
      expect(response.status).to.equal(StatusCodes.CREATED);
    });
  });
  register.customerId = customerId;
  return register;
};

export function customerTeardown() {
  let response;
  
  describe('Tearing down the Customes', () => {
    before(async () => {
      response = await del(`localhost:8080/api/customer/`)
      .set('User-Agent', 'agent')
    });
    it('Then all customers sould be deleted', () => {
      expect(response.status).to.equal(StatusCodes.NO_CONTENT);
    });
  });

};
