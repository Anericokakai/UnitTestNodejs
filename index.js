//  IMPORT EXPRESS
import express from "express";
 export const app=express()

app.listen(8000,()=>{
    console.log("app listening at port 8000")
})

app.get("/products",(req,res)=>{

res.status(200).send("hello world")


})


