//  IMPORT EXPRESS
import express from "express";
const app=express()

app.listen(8000,()=>{
    console.log("app listening at port 8000")
})

app.get("/products",(req,res)=>{

res.send("hello world")


})


