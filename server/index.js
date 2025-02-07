import express from 'express';//import means we are using type module so we have to write in package.json "type":"module"
import Connection from './db/db.js';
import Route from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

//the body of the response we get when we hit /add post request cant be handled by express
//so we have to use the body-parser





const app =express();
app.use(cors());
app.use(bodyParser.json({extended:true}));
//the body of the request we get is in json format so we have to use extended:true

app.use(bodyParser.urlencoded({extended:true}));

//suppose we hit https://facebook.com/query?=hi hello
//so the browser can identify the spaces in between the url and adds %90 or some random numbers
//so we have to parse the url thats why we use urlencoded


app.use('/',Route);

Connection();


const port=8000;
app.listen(port,()=>{
    console.log(`server started successfully on port ${port}`)
})
