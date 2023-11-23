<<<<<<< HEAD
const passport = require('passport');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
var opt = {};

opt.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opt.secretOrKey = 'secretkey';

passport.use(new JwtStrategy(opt, (payload, done) => {
        if (payload == null) {
           return done(null,false)
        }
        const user = payload;
        return done(null,user)
=======
const passport = require('passport');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
var opt = {};

opt.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opt.secretOrKey = 'secretkey';

passport.use(new JwtStrategy(opt, (payload, done) => {
        if (payload == null) {
           return done(null,false)
        }
        const user = payload;
        return done(null,user)
>>>>>>> 99b34a2cc432df8616f8e42035f25c612723ee9f
}))