# Overview

Common API used for an automated testing:

- `sinon` ([sinonjs.com](https://sinonjs.org/)) for spying/stubbing/mocking.
- `FakeTimers` for timers manipulation, [docs](https://www.npmjs.com/package/@sinonjs/fake-timers)
- `chai` ([chaijs.com](https://www.chaijs.com/)) for asserting with `expect` API enouraged and some plugins:
    - `chai-as-promised` - Promises support, [docs](https://www.chaijs.com/plugins/chai-as-promised/).
    - `chai-datetime` - Dates support, [docs](https://www.chaijs.com/plugins/chai-datetime/).
    - `chai-integer` - assirting on Integer type, [docs](https://www.chaijs.com/plugins/chai-integer/).
    - `chai-url` - URLs support, [docs](https://www.chaijs.com/plugins/chai-url/).
    - `sinon-chai` - integration with `sinon`, [docs](https://www.chaijs.com/plugins/sinon-chai/).
    - `chai-string` - various handly String assertions, [docs](https://www.chaijs.com/plugins/chai-string/).
    - `chai-dom` - DOM support, [docs](https://www.chaijs.com/plugins/chai-dom/).

# Usage example

```js
const { expect, sinon, FakeTimers } from '@majus/testing';

describe('My tests', () => {
  let clock;

  beforeEach(() => {
    sinon.stub(console, 'log');
    clock = FakeTimers.install();
  });

  afterEach(() => {
    clock.uninstall();
    sinon.restore();
  });

  it('my test for integer', () => {
    const result = myIntFunc();
    expect(result).to.be.an('integer').and.to.be.least(0);
  });

  it('my test for promise', async () => {
    const result = myAsyncFunc();
    await expect(result).eventually.to.be.fulfilled;
  });

  it('my test for date', () => {
    const result = myDateFunc();
    expect(result).to.be.a('date').and.beforeDate(new Date());
  });

  it('my test for date', () => {
    const result = myStringFunc();
    expect(result).to.be.a('string').and.startWith('[');
  });

  it('my test for sinon', () => {
    myComplexFunc();
    expect(console.log).not.to.be.called;
  });

  it('my test for timers', () => {
    let flag = false;
    setTimeout(() => {
      flag = true;
    }, 10000);
    clock.tick(10000);
    expect(flag).to.be.true;
  });
  
});
```