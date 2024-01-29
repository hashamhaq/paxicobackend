const express = require('express');
const app = express();
const port = 5001;

app.get('/', (req, res) => res.send('Backend 1st change through GIT and container jenkins 5001 version 1.0'));

app.listen(port, () => console.log(`App 1 listening on port ${port}`));
