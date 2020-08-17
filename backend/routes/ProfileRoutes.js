const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');



router.post('/profile', (req, res)=>{
    const formData = {

        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,
       
       
    }

    const newFeed = new Profile(formData);

    newFeed
    .save()
    .then(newFeedData=>{
        res.json(newFeedData);
    })
    .catch(err=>{
        res.json(err)
    });

});



module.exports = router;