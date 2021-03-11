import { Config } from 'protractor';

export const config: Config = {
  framework: 'mocha',
  specs: ['../test/ui/**/*.js'],
  //seleniumAddress: 'http://0.0.0.0:4444',
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  SELENIUM_PROMISE_MANAGER : false,
  mochaOpts: {
	  reporter: 'mochawesome-screenshots'  
  },
};
