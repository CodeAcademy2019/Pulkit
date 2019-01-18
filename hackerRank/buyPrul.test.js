const functions = require('./buyPrul.js');
describe('functions',()=>{
    it('should match the output shown',()=>{
        expect(functions.printMaxProfit(`3
        3 19 9 2
        5 20 11 10 7 1
        2 18 2
        0`)).toEqual(`1
1
5`)
    });
    it('should match the output shown',()=>{
        expect(functions.printMaxProfit(`2
        6 1 2 3 10 15 5
        6 15 5 15 5 15 5
        0`)).toEqual(`1
        24
        3`)
    })
    it('should match the output shown',()=>{
        expect(functions.printMaxProfit(`1
        10 5 13 8 7 11 9 2 10 11 13
        2
        7 8 1 9 15 3 6 10
        4 7 2 14 10
        0`)).toEqual(`1
        15
        7
        2
        28
        8`)
    })
    it('should match the output shown',()=>{
        expect(functions.solveArrays([[1,8,13]])).toEqual([13,3]);
    })

    it('should match the output shown',()=>{
       expect(functions.solveSingle([1,8,13])).toEqual([13,3]);
    })
})