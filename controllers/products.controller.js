const db = require("../models");
const Products = db.products;
const Op = db.Sequelize.Op;

// Create and Save a new student

exports.create = (req, res) => {
  // Validate request

  const company = {
    company_id: req.body.company_id,
    company_name: req.body.company_name

  };

  // Save student in the database
  Products.create(company)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the student.",
      });
    });
};

exports.findAll = (req, res) => {
    Products.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving students.",
      });
    });
};




