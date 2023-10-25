const router = require('express').Router()
const passport = require('passport')

router.get('/ //service', passport.authenticate('//service'))

router.get('/ //serice /callback', passport.authenticate('//service'), (req,res) => {
    res.redirect('/profile')
})

router.get('/logout', (req,res) => {
    req.logout()
    res.redirect("/")
})
module.exports = router