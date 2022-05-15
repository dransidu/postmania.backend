const express = require('express');
const app = express();
const v1 = require('./api/v1/routes')

// port 
const PORT = 5000;

// config routes
app.use('/api/v1', v1);

// app listen
app.listen(PORT, () => { console.log(`Server start on ${PORT} port`) })