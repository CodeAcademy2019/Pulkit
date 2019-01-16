const variableAverage = require('./restFunction.js');
describe('variableAverage',()=>{
    it('with three arguements as number should return their average(3.33)',()=>{
        expect(variableAverage(2,3,5)).toEqual('3.33');
    })

    it('with one arguments it should return number itself(100)',()=>{
        expect(variableAverage(3)).toEqual('3.00');
    })

    it('should return message: not a number',()=>{
        expect(variableAverage('123','34f')).toEqual('not a number');
    })

    it('should return a message: empty array',()=>{
        expect(variableAverage()).toEqual('empty array');
    })
})