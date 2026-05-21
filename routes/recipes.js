const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Routes working');
});



module.exports = router;