const asynchPromise = require('./promiseAsynchronous-5.js');

describe('testing for asynchronous behaviour of promise',()=>{
    it('should return appropriate sequence',()=>{
        const res = asynchPromise.asynchPromise();
        return expect(res).resolves.toEqual(['MAIN PROGRAM','PROMISE VALUE']);
    })
    it('should not return random sequence',()=>{
        const res = asynchPromise.asynchPromise();
        return expect(res).resolves.not.toEqual(['mAIN PROGRAM','PROMISE VALUE']);
    })
    it('should create promise with passed string ',()=>{
        //const res = asynchPromise.createPromise();
        return expect(asynchPromise.createPromise('MAIN PROGRAM')).resolves.toEqual('MAIN PROGRAM');
    })
    it('should not create promise with wrong string ',()=>{
        //const res = asynchPromise.createPromise();
        return expect(asynchPromise.createPromise('MAIN PROGRAM')).resolves.not.toEqual('main program');
    })
    it('should not create promise with random string ',()=>{
        //const res = asynchPromise.createPromise();
        return expect(asynchPromise.createPromise('MAIN PROGRAM')).resolves.not.toEqual('bnbansgh');
    })
})