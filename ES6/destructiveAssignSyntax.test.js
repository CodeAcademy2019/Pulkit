const destruct = require('./destructiveAssignSyntax.js');
var result =[{
    email: 'pulkitgarg2493@gmail.com',
    username: 'Pulkit Agarwal'
    },
    {
    email: '',
    username: ''
    },
    {
    email: null,
    username: 'Pulkit'
    }
]
var inputs = [['jest','test',189,'Pulkit Agarwal','pulkitgarg2493@gmail.com',18,'pulkit','agarwal'],
            ['jest','test','','','','','',''],
            ['jest','test',123,'Pulkit',null]
            ]

describe('destruct',()=>{
    it('should return the appropriate object',()=>{
        for(var i=0;i<inputs.length;i++)
        {
            //console.log(inputs[i])
        process.argv = inputs[i];
        expect(destruct()).toEqual(result[i]);
        }
        
    })

   

    // it('should return error message for empty array',()=>{
    //     process.argv = [];
    //     expect(stringsToFirstCharsString()).toEqual(`Empty array passed`);
    // })
    
    // it('should return error message for empty array',()=>{
    //     process.argv = ['jest',null];
    //     expect(stringsToFirstCharsString()).toEqual(`Empty array passed`);
    // })

    // it('should return error message for empty array',()=>{
    //     process.argv = ['jest',null];
    //     expect(stringsToFirstCharsString()).toEqual(`Empty array passed`);
    // })

})