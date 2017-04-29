const express = require('express');
const bodyParser = require('body-parser');

app = express();
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/contacts/remove', (req, res) => {
    const {contactsIds} = req.body;
    // something removing from db...
    res.json({
        contactsIds
    });
});

app.get('/contacts', (req, res) => {

    res.json({
        contacts: [{
            id: 1,
            name: 'Roman'
        }, {
            id: 2,
            name: 'Anna'
        }, {
            id: 3,
            name: 'Ivan'
        }, {
            id: 4,
            name: 'Vadim'
        }]
    })
});

app.listen(3001, () => {
    console.log('listen ... ');
});