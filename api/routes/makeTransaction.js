const express = require('express')
const router = express.Router()

//This route updates money to the account selected, with the correct userID, if that userID does not exist it will not update anything

const Account = require('../models/Account')
const User = require('../models/User')
//This route will take care of making transaction for a user

router.post('/', (req, res) => {
    User.findOne({ID: req.body.userID})
    .then((result) => {
        if(result == ""){
            res.send(204) //This user doesnt exist so not allowed to update until he is registered
        }
        else{
            Account.findOneAndUpdate({authDoc: req.body.userID}, {initialCredit: req.body.transfer})
            res.send(203)
        }
    })
    .catch((err) => console.log(err))
})

module.exports = router