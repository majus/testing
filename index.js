const sinon = require('sinon');
const delay = require('delay');
const FakeTimers = require('@sinonjs/fake-timers');
const chai = require('chai');

chai.use(require('chai-as-promised'));
chai.use(require('chai-datetime'));
chai.use(require('chai-integer'));
chai.use(require('chai-url'));
chai.use(require('sinon-chai'));
chai.use(require('chai-string'));
chai.use(require('chai-dom'));

module.exports = {
  sinon,
  chai,
  expect: chai.expect,
  FakeTimers,
  delay
};