const express = require("express")
const app = express()
const port = 8080




app.get("/",(req,res)=>{
    res.send("Home Page")
    })

app.post("/register", (req,res)=>{
    const {email,password} = req.body
    console.log(req.body)
    if(!name || !email || !password){
        res.send("User registered")
    }
    else{
        res.status(406).send("Unacceptable")
    }
})


// What is MiddleWare?
// Ans: Middleware is a callback function that is executed between the request and the response. It is used to provide protection to the api.

// What is express.json()
//Ans: express.json() is a middleware function that helps send the data to the server. It also helps us to access the data that is being sent to the server.
