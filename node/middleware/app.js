
const express = require('express');

const app = express();


function middleware1 (req,res,next){
    console.log("Middleware 1");
    next();

};

const middleware2 = (req,res,next ) => {
    console.log("Middleware 2");
    next();
};

app.use(middleware1);
app.use(middleware2);
app.use((req,res,next)=>{
    console.log("Middleware 3");
    
});


app.listen(3000);