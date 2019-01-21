const autoConvertPromise = require('./promiseAutoConvert-8.js');
describe('testing for automatic conversion of promise',()=>{
    it('testing if defined promise returns the correct string: MANHATTAN',()=>{
        return expect(autoConvertPromise.createPromise()).resolves.toEqual('MANHATTAN');
    })
    it('testing defined function=> attachTitle adds DR. to string',()=>{
        return expect(autoConvertPromise.attachTitle('Shyam')).toEqual('DR. Shyam');
    })
    it('testing that the returned string will be auto convert to promise',()=>{
        return expect(autoConvertPromise.resultString()).resolves.toEqual('DR. MANHATTAN');
    })
})