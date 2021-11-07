import express from 'express';
import path from 'path';
import fs from 'fs';

import {data} from './data.js';

const app = express();


app.get('/index.html',(req,res)=>{
    // let filepath=path.join(__dirname,'example','example.html');
    let data=fs.readFileSync('./example/index.html','utf-8');
    res.send(data);
});


app.get('/initData',(req,res)=>{
    res.json(data);
})


app.get('/addData/:number',(req,res)=>{
    const number = Number(req.params.number) + 1;
    const newData = {
        number:number,
        name:'student' + number,
        age:20,
        sex:'男'
    }
    res.json(newData);
})


app.listen(8080,()=>{
    console.log('server2 running');
})