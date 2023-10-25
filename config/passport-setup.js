const passport = require('passport')
//import strategy

const User = require('./user-model')
const keys = require('./keys')

passport.serializeUser((user, done) => {
    done(null,user)
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null,user)
    })
})

//setup strategy
passport.use(new /* Strategy */)