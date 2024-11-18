const mysql = require("mysql2");

//explicar en el readme
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rey6199162126",
  database: "Ecommerce"
}); //creamos la configuración para conectarnos a la bd

db.connect(); // nos conectamos

module.exports = db;
