const promise = require('./promiseOnlyOnce-4.js');
describe('testing promises',()=>{
    it('testing if promise is rejected with appropriate value',()=>{
        return promise.doPromise().then(data => {
              expect(data).toEqual('I FIRED');
       });
   })
   it('testing if promise do not rejects to wrong value', () => {
       return expect(promise.doPromise()).resolves.not.toEqual('I DID NOT FIRE');
     })

     it('testing if method returns error message', () => {
        expect(promise.onReject(new Error('error !!!'))).toEqual('error !!!');
      })
})