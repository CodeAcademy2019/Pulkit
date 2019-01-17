let promises = require('./promiseResolveReject-6.js');
describe('tesing resolve and reject',()=>{
    it('testing if resolves returns right string : Resolved',()=>{
        return expect(promises.promiseResolve).resolves.toEqual('Resolved');
    })
    it('testing if resolves do not return random strings like : resolved',()=>{
        return expect(promises.promiseResolve).resolves.not.toEqual('resolved');
    })
    it('testing if rejects returns right error object : Rejected',()=>{
        return expect(promises.promiseReject).rejects.toEqual(new Error('Rejected'));
    })
    it('testing if rejects do no returns random error object : rEjected',()=>{
        return expect(promises.promiseReject).rejects.not.toEqual(new Error('rEjected'));
    })
})