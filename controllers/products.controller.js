const db = require("../models");
const Products = db.products;
const Op = db.Sequelize.Op;
const uploadFile = require("../middleware/upload");

// Create and Save a new student

exports.create = async(req, res) => {
  // Validate request

  try {
    await uploadFile(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    const products = {
      product_name: req.body.product_name,
      product_description: req.body.product_description,
      product_img: req.file.originalname,
      product_qty: req.body.product_qty,
      product_price: req.body.product_price

    };

    // Save student in the database
    Products.create(products)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the products.",
        });
      });

  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};

exports.findAll = (req, res) => {
  Products.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    });
};




