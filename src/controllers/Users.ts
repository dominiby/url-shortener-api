import express from 'express';

const controller = express.Router();

/* GET home page. */
controller.get('/', function (req, res, next) {
  res.json('Users');
});

export default controller;
