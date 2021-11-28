const express  = require("express")

const router = express.Router()


router.get("/",(req,res)=>{
    res.send("Home Page")
    })

router.get("/sampleproducts",(req,res)=>{
    res.json([{Product_name:"soap", quantiy : 12}, {Product_name:"shampoo", quantiy : 16}])
    })

router.get("/sampleusers",(req,res)=>{
        res.json([{name:"vipul"}])
        })

 module.exports = router
