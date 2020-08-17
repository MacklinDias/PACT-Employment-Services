const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');



router.post('/contact', (req, res)=>{
    const formData = {

        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        email: req.body.email,
        message: req.body.message,
       
    }

    const newFeed = new Contact(formData);

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