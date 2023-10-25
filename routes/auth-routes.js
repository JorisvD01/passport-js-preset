const router = require('express').Router()
const passport = require('passport')

router.get('/'/*add service*/, passport.authenticate(''/*add service*/))

router.get('//callback',/*add service*/ passport.authenticate(''/*add service*/), (req,res) => {
    res.redirect('/profile')
})

router.get('/logout', (req,res) => {
    req.logout()
    res.redirect("/")
})
module.exports = router