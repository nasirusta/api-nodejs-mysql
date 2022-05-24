const dbConfig = require("../config/dbConfig");
const { Sequelize, DataTypes,Op } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    operatorsAliases: false,
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
  define: {
    freezeTableName: true,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database has been connected");
  })
  .catch((err) => {
    console.log(`Error db connect. Error: ${err}`);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Op = Op;

db.post = require("./postModel")(sequelize, DataTypes);
db.kategoriler = require("./kategorilerModel")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("Yes re-sync done!");
});

module.exports = db;
