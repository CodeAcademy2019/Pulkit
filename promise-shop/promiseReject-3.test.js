
const promise = require('./promiseReject-3.js');

jest.useFakeTimers();

describe('promise',()=>{
    it('testing if promise is rejected with appropriate value',()=>{
         promise().then(null,data => {
          return expect(data).toEqual(new Error('REJECTED!'));
        });
    })
    it('testing if promise do not rejects to wrong object value', () => {
        return expect(promise()).rejects.not.toEqual(new Error('rejected!'));
      })

    it('testing if promise do not reject with wrong value', () => {
        //expect.assertions(1);
        return expect(promise()).rejects.not.toEqual('REJECTED!');
      }) 
   
})