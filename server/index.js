require('dotenv').config({path: './config.env'});
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1/rest", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((result) => console.log("Connected to database."))
  .catch((err) => console.log("Not connected",err));  

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/item', require('./routes/item'));
app.get('/test', (req, res) => {
  res.send("hello");
});

const server = app.listen(3001, () => console.log("Server: listening at http://localhost:3001"))

process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged error: ${error}`)
  server.close(() => process.exit(1))
})