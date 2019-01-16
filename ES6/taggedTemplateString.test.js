const convertToSafeSequence = require('./taggedTemplateString.js');
describe('convertToSafeSequence',()=>{
    it('should return normal tagged safe string',()=>{
        process.argv = ['jest','test','Pulkit','<&I have a fun book>'];
        expect(convertToSafeSequence()).toEqual('<b>Pulkit says</b>: "&lt;&amp;I have a fun book&gt;"');
    })
    it('should return normal tagged safe string',()=>{
        process.argv = ['jest','test','Shyam',`<&">'all of them are nice looking symbols`];
        expect(convertToSafeSequence()).toEqual('<b>Shyam says</b>: "&lt;&amp;&quot;&gt;&apos;all of them are nice looking symbols"');
    })

    it('should return empty in places of name and comment',()=>{
        process.argv = ['jest','test','',''];
        expect(convertToSafeSequence()).toEqual('<b> says</b>: ""');
    })

})