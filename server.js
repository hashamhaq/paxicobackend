const express = require('express');
const app = express();
const port = 5001;

app.get('/', (req, res) => res.send('Backend is live'));

app.listen(port, () => console.log(`App 1 listening on port ${port}`));
