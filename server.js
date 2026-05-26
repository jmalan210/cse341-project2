const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const passport = require('passport');
const session = require('express-session');
const GitHubStrategy = require('passport-github2').Strategy;
const cors = require('cors');
// const recipesRoutes = require('./routes/recipes');
// const usersRoutes = require('./routes/users');

const PORT = process.env.PORT || 3000;

app.use(express.json());

// const swaggerRoutes = require('./routes/swagger');
// app.use('/api-docs', swaggerRoutes);



app
    .use(session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
    }))
    .use(passport.initialize())
    .use(passport.session())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, Z-Key, Authorization'
        );
        res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, OPTIONS, DELETE');
        next();
    })
    .use(cors({ methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'] }))
    .use(cors({ origin: '*' }))
    .use('/', require('./routes/index.js'));

    //debugger code
app.get('/debug', (req, res) => {
    res.json({
        user: req.user,
        session: req.session
    });
});

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
},
    function (accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }));

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});

app.get('/', (req, res) => {
    res.send(req.user
        ? `Logged in as ${req.user.displayName}`
        : 'Logged out')
});

app.get('/github/callback', passport.authenticate('github', {
    failureRedirect: '/api-docs'
}),
    (req, res) => {
       
        res.redirect('/');
    });

// app.use('/recipes', recipesRoutes);
// app.use('/users', usersRoutes);


mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });

// app.get('/', (req, res) => {
//     res.send('API is running');
// });