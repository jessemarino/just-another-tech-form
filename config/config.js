const Sequelize = require("sequelize");

require("dotenv").config();

//Creating connection to database
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.DB_USER, process.env.DB_PW, {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    });
// tests connection to db
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
