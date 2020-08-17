const PassportJWT = require('passport-jwt');
const JwtStrategy = PassportJWT.Strategy;
const ExtractJwt = PassportJWT.ExtractJwt;
const secret = process.env.SECRET;

const User = require('../models/User');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
};

const initPassportStrategy = (passport) => {
    const theJwtStrategy = new JwtStrategy(opts, (jwtPayload, done)=>{
        User
        .findById(jwtPayload.id)
        .then((theUser)=>{
            if(theUser) {
                return done(null, theUser);
            }
            else {
                return done(null, false);
            }
        })
        .catch((err)=>{
            console.log('error', err);
            return done(null, null);
        })
    });

    passport.use(theJwtStrategy)
}

module.exports = initPassportStrategy;
