'use strict'
const promise = require('./promise-2.js');
jest.useFakeTimers();
describe('promise',()=>{
    it('testing if promise is fulfilled with appropriate value',()=>{
        return promise.didPromise().then(data => {
          expect(data).toEqual('FULFILLED!');
        });
    })
    it('testing if promise do not resolves to wrong value resolves', () => {
        return expect(promise.didPromise()).resolves.not.toEqual('Fulfilled!');
      })

    // it('testing if promise do not reject', () => {
    //     //expect.assertions(1);
    //     return expect(promise()).rejects.not.toMatch('REJECTED!');
    //   })
    
    it('testing if the setTimeout has called with proper arguments',()=>{
        promise.timeOut();
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function),300);
    })
    it('testing if the setTimeout has been called just once',()=>{
        //promise.timeOut();
        expect(setTimeout).toHaveBeenCalledTimes(1);
    })

   
    
   
})