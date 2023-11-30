//imports
const express = require("express");
const cors =  require("cors");
console.log("cors is", cors);

//consts
const app = express();

//init app
app.use(express.json());
app.use(cors({
    allowedHeaders: ["authorization", "Content-Type"], // you can change the headers
    exposedHeaders: ["authorization"], // you can change the headers
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false
  }));
app.use(express.urlencoded({extended: true}));

//serer calls
app.get('/', (req,res)=>{
    console.log("Response was: ", res)
})


app.listen(8080, ()=>{
    console.log("listening to server side local 8080")
})


export default app;