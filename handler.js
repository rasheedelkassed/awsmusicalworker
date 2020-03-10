'use strict';
const handler = require('serverless-express/handler')
const app = require('./app')

const AWS = require('aws-sdk');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/play', async (req, res) => {
  console.log(JSON.stringify(req.body));
  res.status(200).send();
});

module.exports.handler = handler(app);