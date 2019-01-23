const functions = require('./asynchAllFiles-5.js');
describe('All FUnctions',()=>{
    it('testing readDir: should give list of files filter by the keyword provided for suffix',(done)=>{
        process.argv = ['jest','test','./','txt'];
        const callback = (data)=>{
            expect(data).toEqual(['tm2.txt']);
            done();
        }
        functions.readDir(callback);
    })
    it('testing readDir: should print error when ambiguous path passed',(done)=>{
        process.argv = ['jest','test','./tekken','txt'];
        const callback = (data)=>{
            expect(data).toEqual(['error while reading']);
            done();
        }
        functions.readDir(callback);
    })
    it('testing callback:should give all list elements appended',()=>{
       // process.argv = ['jest','test','./','txt'];
      expect(functions.callback(['I',' love',' apples.'])).toEqual('I love apples.')
    })
    it('testing callback:should empty string when empty array passed',()=>{
        // process.argv = ['jest','test','./','txt'];
       expect(functions.callback([])).toEqual('')
     })
    it('testing filterlist: should filter the list according to suffix keyword',()=>{
        expect(functions.filterList(['abc.txt','addNumber.txt','join.txtjs','alpha.js'],'txt')).toEqual(['abc.txt','addNumber.txt']);
    })
    it('testing filterlist: should filter the list according to suffix keyword',()=>{
        expect(functions.filterList(['jsabcjs.txt','addNumber.txt','join.js'],'js')).toEqual(['join.js']);
    })

})