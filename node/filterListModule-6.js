const filterList = require('./filterListModuleImport-6.js');
const callback = (err,data)=>{
    // console.log(data);
   if(err)
   {
       console.log(err.message);
       return;
   }
    data.forEach(element => {
        console.log(element);
    });
}
const filterTheDirectory = ()=>{
    filterList(process.argv[2],process.argv[3],callback);
}
filterTheDirectory();