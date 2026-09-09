const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req,res)=>{
    res.send("SyriaNumbers Backend يعمل");
});


app.post("/request-number",(req,res)=>{

    const country = req.body.country;
    const service = req.body.service;


    res.json({

        success:true,
        country:country,
        service:service,
        number:"+000000000"

    });

});


app.listen(3000,()=>{

console.log("Server running on port 3000");

});
