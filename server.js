const express = require('express');
const app = express();
const port = 5001;

app.get('/', (req, res) => res.send('Frontend file Port 5001  on AWS'));

app.listen(port, () => console.log(`App 1 listening on port ${port}`));
