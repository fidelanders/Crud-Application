const express = require ("express")
const router=express.Router()

//Create a new user
router.post("/signup", (req, res)=> {
    console.log(req.body)
    res.send(req.body)


})
module.exports=router