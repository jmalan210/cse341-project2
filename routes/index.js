const passport = require('passport');

const router = require('express').Router();

router.use('/api-docs', require('./swagger'));
router.use('/recipes', require('./recipes'));
router.use('/users', require('./users'));

router.get('/login', passport.authenticate('github'));

router.get('/logout', function (req, res, next) {
    req.logout((err) => {
        if (err) 
            return next(err); 

        //logic to delete session and clear cookies for video demonstration
        req.session.destroy(() => {
            res.clearCookie('connect.sid');
            res.redirect('/');
        });
    });
});

module.exports = router;