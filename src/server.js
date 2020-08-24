const express = require("express");
const server = express();
const cors = require("cors");
const { dashboard } = require("./page");
server
  .use(cors())
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept",
      "*"
    );
    next();
  })
  .use(express.urlencoded({ extended: true }))
  .use(express.static("public"))
  .use(express.json())
  .get("/", dashboard)
  .listen(5500);

const nunjucks = require("nunjucks");
nunjucks.configure("public/view", {
  express: server,
  noCache: true,
});
