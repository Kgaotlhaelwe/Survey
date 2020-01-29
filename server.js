const express = require('express') ;
const pg = require('pg') ;
const config = require('config');
const db = config.get('mongoURL');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')  ;
const path = require('path');
const cors  = require('cors');

const app = express() ;
app.use(cors()) ;
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const port = process.env.PORT || 4000 ;

mongoose
.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true
}) // Adding new mongo url parser
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));





app.get('/', (request, response) => {
    response.send( 'Node.js, Express, and Postgres API' )
  })

  //Routes 
  app.use('/survey/surveyanswer', require('./router/router'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })