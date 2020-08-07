const express = require('express');
const path = require('path');
const app = express();

// serve up production assets
app.use(express.static('../client/dist'));

// let the react app to handle any unknown routes 
// serve up the index.html if express does'nt recognize the route
app.get('*', (req, res) => {
res.sendFile(path.resolve('../client/dist/index.html'));
});

// if not in production use the port 80
const PORT = process.env.PORT || 80;
console.log('server started on port:',PORT);
app.listen(PORT);
