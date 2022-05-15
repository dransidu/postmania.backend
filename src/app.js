const express = require('express');
const app = express();

// port 
const PORT = 5000;

// app listen
app.listen(PORT, () => { console.log(`Server start on ${PORT} port`) })