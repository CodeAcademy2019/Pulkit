const chainedPromise = require('./promiseChaining-7.js');
const result = 'c0d50a34e88cc3eb9ed36544c5d482769025c18';
describe('testing the secret value provided by global function',()=>{
    it('tests if it returns the secret value',()=>{
        return expect(chainedPromise.secretPromise).resolves.toEqual(result+'b');
    })

    it('tests if it do not returns the random value',()=>{
        return expect(chainedPromise.secretPromise).resolves.not.toEqual('a0d50a34e88cc3eb9ed36544c5d482769025c18b');
    })

    it('tests if first() is returning right promise[with value above]',()=>{
        return expect(chainedPromise.first()).resolves.toEqual(result);
    })

    it('tests if second() is returning right promise[with value above]',()=>{
        return expect(chainedPromise.second(result)).resolves.toEqual(result+'b');
    })

})