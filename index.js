const express = require("express")
const { route } = require("./route")
const app = express()
const port = 8080

const expressroute = require("./route")
const postroute = require("./postroute")

app.use(express.json())

const isAdmin = false

app.use((req, res, next)=>{
    if(isAdmin == true){
        next()
    }
    else{
        res.status(401).json({message:"Unauthorized access"})
    }

})
app.use(postroute)
app.use(expressroute)
app.use("*", (req, res) => {
    res.status(404).send("404 not found")
})


app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("server has started on port 8080")
    }
})
