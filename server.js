const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const recipesRoutes = require('./routes/recipes');
const usersRoutes = require('./routes/users');


app.use(express.json());

const swaggerRoutes = require('./routes/swagger');
app.use('/api-docs', swaggerRoutes);

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});


app.use('/recipes', recipesRoutes);
app.use('/users', usersRoutes);


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

app.get('/', (req, res) => {
    res.send('API is running');
});