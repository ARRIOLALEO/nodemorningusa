const express = require("express")
const router = express.Router()

router.get("/",(req,response,next)=>{
    response.status(200).send("hello user Routes")
})


module.exports = router