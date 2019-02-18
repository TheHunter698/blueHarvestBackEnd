const express = require('express');
const router  = express.Router();

var User = require('../models/User')
var Account = require('../models/Account')

//If status is 203 the front end will prepare itself for a transaction to that client account

/* GET home page */
router.post('/', (req, res, next) => { //We create a user and an account linked to him
  User.create({
    name: req.body.name,
    surname: req.body.surname,
    ID: req.body.userID,
  })
  .then((createdUser) => {
      Account.create({
        propietary: createdUser._id,
        created: new Date(),
        initialCredit: 0,
        authDoc: createdUser.ID,
      })
      .then((result) => {
        res.send(203)
      })
  })
  .catch((err) => console.log(err))
});

module.exports = router;
