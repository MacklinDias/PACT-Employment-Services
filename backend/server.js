require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');

const UserRoutes = require('./routes/UserRoutes');
const PostRoutes = require('./routes/PostRoutes');
const ContactRoutes  = require('./routes/ContactRoutes');
const ProfileRoutes  = require('./routes/ProfileRoutes');
const initPassportStrategy = require('./config/passport');

// Create an express app
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(passport.initialize()); //passport
initPassportStrategy(passport); //passport-jwt

const db = process.env.MONGO_URI;
mongoose
.connect(db, {useNewUrlParser: true, useUnifiedTopology: true}) //Promise
.then(()=>{
    console.log('DB is connected');
})

.catch((err)=>{
    console.log('error', err)
});
 
app.use(
    '/', // http://example.com/users/...
    UserRoutes
);

app.use(
    '/', // http://example.com/users/...
    PostRoutes
);

app.use(
    '/', // http://example.com/users/...
    ContactRoutes
);

app.use(
    '/', // http://example.com/users/...
    ProfileRoutes
);

app.get( 
    '/',
    (req, res)=> {
        Feed.find()
        .then((users)=>{
            res.json(users);
        })
        .catch((err)=>console.log(err))
    }
);

app.use(
    '/',
    passport.authenticate('jwt', {session: false}),
    PostRoutes
);


app.listen(process.env.PORT || 3000, ()=>{
    console.log('You are connected!')
})


// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require ('mongoose');

// const UserRoutes = require('./routes/UserRoutes');
// const PostRoutes = require('./routes/PostRoutes');


// const app = express();
// const db = 'mongodb+srv://admin:Macklin_25@cluster0-k2roc.mongodb.net/test?retryWrites=true&w=majority';

// mongoose
// .connect(db, {useNewUrlParser: true, useUnifiedTopology: true}) //Promise
// .then(()=>{
//     console.log('DB is connected');
// })
// .catch((err)=>{
//     console.log('error', err)
// })

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json()); 

// app.get('/', (req, res)=>{
//     res.send("<h1>Welcome Home</h1>")
// })

// app.use(
//     '/register', // http://example.com/users/...
//     UserRoutes
// );

// app.use(
//     '/post',
//     PostRoutes
// );


// app.listen(3000, ()=>{

//     console.log('you are connected');
// })
