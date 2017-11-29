const google = require('./');

google('Hello World',(err,resp)=>{
    if(err){
        console.log(err);
    }
    console.log(resp);
});
