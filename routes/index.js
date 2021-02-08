const express = require('express') 
const router = express.Router() 

// Login / Landing page 
// route  get / 

router.get('/', (req,res) =>{
    res.send('Login')
})

//  @desc Dashboard 
// route  get / dashboard 

router.get('/dashboard' , (req,res) =>{
    res.send('Dashboard')
})


module.exports = router