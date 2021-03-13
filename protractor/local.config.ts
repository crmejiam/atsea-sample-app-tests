import { browser, Config } from 'protractor';
const firefoxConfig = {
  browserName: 'firefox',  
  name: 'firefox-tests',
  shardTestFiles: true,
  maxInstances: 1
};

const chromeConfig = {
  browserName: 'chrome',
  chromeOptions: {
    args: ['--window-size=1920,1080']
  },
  name: 'chrome-tests',
  shardTestFiles: true,
  maxInstances: 1
};
const multiCapabilities = [chromeConfig, firefoxConfig];
export const config: Config = {
  multiCapabilities,
  framework: 'mocha',
  specs: ['../test/ui/**/*.js'],
  seleniumAddress: 'http://0.0.0.0:4444',
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  SELENIUM_PROMISE_MANAGER : false,
  mochaOpts: {
    reporterOptions: {
      reportName: "report",
      multiReport: true,
    },
	  reporter: 'mochawesome-screenshots', 
    timeout: 20000,
  },
  getPageTimeout:30000,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
  }
};
