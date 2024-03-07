const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    // Here you can write your logic to send an email
    res.send('Form submitted successfully!');
});

app.listen(3000, () => console.log('Server started on port 3000'));
