// 'npm init'. and npm install express etc if creating from scratch - need to make sure you have dependencies installed.

const express = require('express')
const router = express.Router()

// logging middleware:
const morgan = require('morgan')
// body parsing:
const bodyParser = require('body-parser')
// initializing app: 
const app = express();

// serving static files & logging:
app.use(express.static(__dirname + "./public")); //serving up static files (e.g. css files)
app.use(morgan('dev'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const http = require('http')

// we need to get the layout function - 'views' has index.js which exports all the functions in views:
const layout = require('./views/layout')

app.get('/', (req, res, next) => {
    
    res.send(layout(''))
})


app.listen(3000, () => console.log('app listening on port 3000'))

