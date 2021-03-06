const port = 3003;

const allowCors = require("./cors");

const bodyParser = require("body-parser");

const express = require("express");

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(allowCors);

server.listen(port, function () {
  console.log(` 🚀 is running on port ${port}`);
});

module.exports = server;
