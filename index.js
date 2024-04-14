const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.end("Working");
})
app.listen(8080);