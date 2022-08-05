const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = 3000;

const todo = require('./routes/ToDo');
mongoose
  .connect("mongodb+srv://mafia123:Rock123@cluster0.j7nj9.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTED TO DATABASE");
  });


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(port, ()=> {console.log('Server is listening on port : '+port)})
