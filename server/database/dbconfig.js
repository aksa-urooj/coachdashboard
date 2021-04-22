const Sequelize = require("sequelize");

const sequelize = new Sequelize("whycopy", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
global.sequelize = sequelize;
