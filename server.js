const express = require('express');
const app = express();
const port = 5001;

app.get('/', (req, res) => res.send('Backend is version 1'));

app.listen(port, () => console.log(`App 1 listening on port ${port}`));
