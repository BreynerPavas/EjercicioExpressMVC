const express = require("express");
const db = require("./config/database")
const app = express();
const PORT = 3000;

app.use(express.json());
//base de datos
app.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE Ecommerce;";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Database created...");
    });
  });
  //tablas
  app.get("/createUsersTable", (req, res) => {//tabla users
    let sql =
      "CREATE TABLE ecommerce.users(id INT AUTO_INCREMENT,first_name VARCHAR(50),last_name INT,phone VARCHAR(50),PRIMARY KEY(id));";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Users table created...");
    });
  });

app.get("/createOrdersTable", (req, res) => { //tabla orders
    let sql =
      "CREATE TABLE ecommerce.orders(id INT AUTO_INCREMENT,fecha date,user_id INT,PRIMARY KEY(id),FOREIGN KEY(user_id) REFERENCES ecommerce.users(id));";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Orders table created...");
    });
  });
  //tabla productos
  app.get("/createProductsTable", (req, res) => {
    let sql =
      "CREATE TABLE ecommerce.products(id INT AUTO_INCREMENT,name_product VARCHAR(50),price INT,PRIMARY KEY(id));";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Posts table created...");
    });
  });
  //tabla categorias
  app.get("/createCategoriesTable", (req, res) => {
    let sql =
      "CREATE TABLE ecommerce.categories(id INT AUTO_INCREMENT,name_category VARCHAR(50),_description VARCHAR(50),PRIMARY KEY(id));";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Posts table created...");
    });
  });
  //tabla Productos_Categorias
  app.get("/createProductsCategoriesTable", (req, res) => {
    let sql =
      "CREATE TABLE ecommerce.productoscategorias(id INT AUTO_INCREMENT,product_id INT,category_id INT,PRIMARY KEY(id),FOREIGN KEY(product_id) REFERENCES ecommerce.products(id) ON DELETE CASCADE,FOREIGN KEY(category_id) REFERENCES ecommerce.categories(id));";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Posts table created...");
    });
  });
  //tabla PedidosProductos
  app.get("/createPedidosProductosTable", (req, res) => {
    let sql =
      "CREATE TABLE ecommerce.pedidosproductos(id INT AUTO_INCREMENT,order_id INT,product_id INT,PRIMARY KEY(id),FOREIGN KEY(product_id) REFERENCES ecommerce.products(id) ON DELETE CASCADE,FOREIGN KEY(order_id) REFERENCES ecommerce.orders(id));";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Posts table created...");
    });
  });
  
  app.listen(PORT, () => console.log("Servidor levantado en el puerto " + PORT));

  //llamadas

app.use("/products",require("./routes/products"));
app.use("/categories",require("./routes/categories"));
