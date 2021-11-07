import express from 'express';

import asyncHandler from 'express-async-handler';
import axios from 'axios';

const app = express();


app.get('/getData',asyncHandler(async (req,res)=>{
    const {data} = await axios.get("http://localhost:3001/sendData");
    console.log(data);
    res.send(data);
}))

app.listen(8080,()=>{
    console.log('server2 running');
})