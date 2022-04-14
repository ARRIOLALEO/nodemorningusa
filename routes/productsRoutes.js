const express = require("express")
const router = express.Router()

router.get("/:productID",middleware,(req,response,next)=>{
    response.status(200).send({name:"hello"})
    //i need to find data from the server 
})


function middleware(req,response,next){
    console.log("im a middleware")
    req.data = "im getting this informaction from the middleware"
    next()
}


module.exports = router