import express from 'express';
import asyncHandler from 'express-async-handler';

const app = express();


app.get('/sendData',(req,res)=>{
    const data = {
        name:'lyh',
        age:20
    };
    // jsonp(必须返回字符串形式)
    res.send("var promise = getPromise({name:'lyh',age:20})");
    //普通情况
    // res.send(data);
})


app.listen(3001,()=>{
    console.log('server1 running');
})