// Fanny Ståhl 2018
// Project application in course DT162G

// Requires
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Instantiate express
const app = express();

// Connect to mongodb
mongoose.connect('mongodb://admin:RwPk2W62isFD7fL@ds149914.mlab.com:49914/natureres', { useNewUrlParser: true });
// Override mongoose promise with global promise
mongoose.Promise = global.Promise;

// Middleware

// CORS
app.use(cors());

// Body Parser
app.use(bodyParser.json());

// Set up routes
app.use('/api/natureres', require('./routes/api'));

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(422).send({ error: err.message });
});

// Port for connection
const port = process.env.PORT || 4000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});