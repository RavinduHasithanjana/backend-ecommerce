module.exports = (app) => {
    const products = require("../controllers/products.controller");
    var router = require("express").Router();
    const cors = require("cors");
  
    app.use(cors());
  
    app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, DELETE"
      );
      next();
    });
  
    router.get("/", products.findAll);
    router.post("/add", products.create);
  
    app.use("/api/products", router);
  };
  