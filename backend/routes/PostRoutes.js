const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


router.post('/post', (req, res)=>{
    const formData = {
        email: req.body.email,
        message: req.body.message,
       
    }

    const newFeed = new Post(formData);

    newFeed
    .save()
    .then(newFeedData=>{
        res.json(newFeedData);
    })
    .catch(err=>{
        res.json(err)
    });

});

router.post('/addlike', async (req, res)=>{
    
    let userLikes;
    let thePostID = req.body.postid;

    // 1. Get the document with matching id
    let theDocument = await Post
    .find({_id: thePostID}) // promise

    // 2. Extract the likes from the document
    userLikes = theDocument[0].likes;

    // 3. Push the new like to the array
    userLikes.push(req.body.userid);

    // 4. Update the document
    Post
    .updateOne(
        {_id: thePostID},
        {likes: userLikes}
    ) //promise
    .then(theFeed=>{
        res.json(theFeed)
    })
    .catch(err=>{
        res.json(err)
    });



});


module.exports = router;