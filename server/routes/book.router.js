const express = require('express');
const router = express.Router();

const bookList = [];

//matches /book in server
//everything here is after that /book
router.get('/', (req, res) => {
    res.send(bookList);
});

router.post('/', (req, res) => {
    bookList.push(req.body);
    res.sendStatus(200);
});

module.exports = router;