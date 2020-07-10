require('dotenv').config() //makes env variables available

//importing required packages
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      path = require('path'), //needed for production build to succeed
      bodyParser = require('body-parser'), //twilio controller
      gradient = require('gradient-string'), //just for fun 
      pino = require('express-pino-logger')(), //twilio controller
      cors = require('cors'); //just to get ahead of any potential CORS issues

//importing controllers
const tc = require('./twilioController')

//importing environmental variables
const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env

//setting app to express app
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false })); //needed for Twilio controller
app.use(bodyParser.json()); //needed for Twilio controller
app.use(pino); //needed for Twilio controller
app.use(cors()); //just to get ahead of any potential CORS issues
app.use(
  session({
      resave: false,
      saveUninitialized: false,
      cookie: {
          maxAge: 1000 * 60 * 60,
          sameSite: 'none'
      },
      secret: SESSION_SECRET
  })
)

//Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(SERVER_PORT, () => console.log(gradient.instagram(`Server blazing on ${SERVER_PORT}`)))

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
}).then((dbInstance) => {
  app.set('db', dbInstance);
  console.log(gradient.instagram(`DB connected`))
}).catch(
  err => console.log(err)
);

//twilio endpoints
app.post('/api/send', tc.send)
app.post('/api/test', tc.test)