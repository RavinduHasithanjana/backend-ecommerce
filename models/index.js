const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
// Databse connection via the sequlizer ORM using the config Credentials 
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// SequlierORM imports the particular model class
db.products = require("./products.model")(sequelize, Sequelize);

module.exports = db;
