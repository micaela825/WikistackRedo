// 'npm init'. and npm install express etc if creating from scratch - need to make sure you have dependencies installed.

const express = require('express')
const router = express.Router()
const morgan = require('morgan') // logging middleware:
const bodyParser = require('body-parser') // body parsing:

const app = express(); // initializing app

app.use(morgan('dev'))
app.use(express.static(__dirname + "./public")); //serving up static files (e.g. css files)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const layout = require('./views/layout') // getting layout function

app.get('/', (req, res, next) => {   
    res.send(layout(''))
})

module.exports = app;

