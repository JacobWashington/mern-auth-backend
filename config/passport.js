require("dotenv").config();
// A passport strategy for authenticating with a JSON Web Token
// This allows to authenticate endpoints using a token
const { Strategy, ExtractJwt } = require("passport-jwt");
const mongoose = require("mongoose");

const { User } = require("../models/user");

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.JWT_SECRET;

module.exports = (passport) => {
  passport.use(
    new Strategy(options, (jwtPayload, done) => {
      User.findById(jwtPayload.id)
        .then((user) => {
          const userExists = user ? done(null, user) : done(null, false);
          return userExists;
        })
        .catch((error) => {
          console.log("======> Error below (passport.js)");
          console.log(error);
        });
    })
  );
};
