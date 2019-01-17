
const promise = require('./promise-2.js');
jest.useFakeTimers();

describe('promise',()=>{
    it('testing if promise is fulfilled with appropriate value',()=>{
        promise.didPromise().then(data => {
        return expect(data).toEqual('FULFILLED!');
        });
    })
    it('testing if promise do not resolves to wrong value', async () => {
        await expect(promise.didPromise()).resolves.not.toEqual('Fulfilled!');
      })
})