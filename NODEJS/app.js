const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);


app.use((request, response, next)=>{
    // response.send('<h1>Page Not found dude</h1>').status(404);
    response.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

// const server = http.createServer(app);

// server.listen(8080);

app.listen(8080);