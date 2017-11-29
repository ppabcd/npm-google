const google = require('./');

google('Hello',(err,resp)=>{
    if(err){
        console.log(err);
    }
});
