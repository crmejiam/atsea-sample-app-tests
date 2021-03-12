import { post, del } from 'superagent';

export function customerSetup() {
  const host = 'localhost:8080';
  let response;
  let customerId;
  const register = {
    customerId: 0,
    name: 'Gordon Freeman',
    address: 'Black Mesa Research Facility',
    email: 'gfreeman@gmail.com',
    phone: '513 222 5555',
    username: 'g',
    password: 'p',
    enabled: 'true',
    role: 'USER'
  };
  describe('Customer Setup', () => {
    before(async () => {
      response = await post(`${host}/api/customer/`)
        .set('User-Agent', 'agent')
        .set('Content-Type', 'application/json')
        .send(register);
      customerId = response.body.customerId;
    });
  });
  register.customerId = customerId;
  return register;
};

export function customerTeardown() {
  const customerId = customerSetup().customerId;
  describe('Customer Teardown', () => {
    before(async () => {
      await del(`localhost:8080/api/customer/${customerId}`);
    });
  });  
};
