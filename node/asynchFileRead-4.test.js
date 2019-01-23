const read = require('./asynchFileRead-4.js'); 
describe('File Read',()=>{
    it('should return number of lines',(done)=>{
        process.argv = ['jest','test','/Users/Pulkit_Agarwal-BNG/Pulkit/node/asynchFileRead-4.js'];
        const callback= (data)=>{
            expect(data).toEqual(21);
            done();
        }
        read.readFile(callback);
        
    })
    it('should return zero in case of empty file',(done)=>{
        process.argv = ['jest','test','/Users/Pulkit_Agarwal-BNG/Pulkit/node/test-3.js'];
        const callback= (data)=>{
            expect(data).toEqual(0);
            done();
        }
        read.readFile(callback);
    })

    it('should return error',(done)=>{
        process.argv = ['jest','test','/Users/Pulkit_Agarwal-BNG/Pulkit/node/test.js'];
        const callback= (data)=>{
            //console.log(data, "data");
            expect(data).toEqual(new Error('file reading error'));
            done();
        }
        read.readFile(callback);
       
    })

})