const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const chats = require('./routes/api/chats');

const passport = require('passport');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Connet to MongoDB
 mongoose.connect('mongodb://localhost:27017/ProjectPro', { useNewUrlParser: true })
  .then(() => console.log(`Local db connected`))
  .catch(err => console.log(err));

//passport
app.use(passport.initialize());
require('./config/passport')(passport); 

//Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/chats', chats);

const port = process.env.port || 5000;
app.listen(port,() => console.log(`Server Running on ${port}`));