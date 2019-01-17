const promise = require('./promiseOnlyOnce-4.js');
describe('testing promises',()=>{
    it('testing if promise is rejected with appropriate value',()=>{
        return promise().then(data => {
              expect(data).toEqual('I FIRED');
       });
   })
   it('testing if promise do not rejects to wrong value', () => {
       return expect(promise()).resolves.not.toEqual('I DID NOT FIRE');
     })
})