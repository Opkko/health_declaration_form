const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post('/submit-form', (req, res) => {
    // Here you would normally store the data and then return a response.
    console.log(req.body);
    res.status(200).send('Data received');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
