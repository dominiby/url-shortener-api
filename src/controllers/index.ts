import express from 'express';

const controller = express.Router();

/* GET home page. */
controller.get('/', function (req, res, next) {
  res.json('API is up and running!');
});

export default controller;
