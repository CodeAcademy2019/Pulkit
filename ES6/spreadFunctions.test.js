const findMinimum = require('./spreadFunctions.js');
var testCases = [['jest','test',1,2],
['jest','test',2],
['jest','test',0.5,.7,1.34],
['jest','test',1,5,67,-1894]];
var result = [1,2,.5,-1894];
describe('should give the minimum number for all the arrays passed',()=>{
        it('returns minimum in array',()=>{
           
            for(var i =0;i<testCases.length;i++)
            {
            //console.log(testCases[i]);
            process.argv = testCases[i];
            expect(findMinimum()).toEqual(`The minimum of [${process.argv.slice(2)}] is ${result[i].toString()}`);
        }
    })
       it('returns empty string',()=>{
           process.argv = ['jest','test'];
           expect(findMinimum()).toEqual(`The minimum of [${process.argv.slice(2)}] is Infinity`)
       })
    
})


// const findMinimum = require('./spreadFunctions.js');
// testCases = [['jest','test',1,2],['jest','test',2],['jest','test',0.5,.7,1.34],['jest','test',1,5,67,-1894]]
// result = [1,2,.5,-1894]
// describe('should give the minimum number for all the arrays passed',()=>{
    
    
//     for(var i =0;i<testCases.length;i++)
//     {
//         it('returns minimum in array',()=>{
            
//             console.log(testCases[i]);
//             process.argv = testCases[i];
//             expect(findMinimum()).toEqual(`The minimum of [${process.argv.slice(2)}] is ${result[i].toString()}`);
//         })}
    
// })