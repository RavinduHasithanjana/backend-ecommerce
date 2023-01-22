const express = require('express');
const bodyParser = require("body-parser");
const app = express();
path = require("path");
global.__basedir = __dirname;
const db = require("./models");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
  });

  // instal API call GET which returns the Text
app.get('/', (req, res) => {
    res.send("Ecom Backend");
})

// Backed Server is available on Port 3000
app.listen(3000, () => {
    console.log("Ecom Backend listening");
})

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/uploads")));

require("./routes/products.route")(app);