const db = require("../config/database")


const ProductController = {
  // Crea un endpoint para añadir un producto nuevo y añade 2 productos nuevos desde el postman
    create(req,res){
        let sql = `INSERT INTO ecommerce.products (name_product, price) values
	('${req.body.name}', ${req.body.price});`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          console.log(result);
          res.send("Product added...");
        });
    },
  // Crea un endpoint para actualizar un producto
    update(req,res){
      let sql = `UPDATE ecommerce.products 
SET name_product = '${req.body.name}', 
    price = ${req.body.price} 
WHERE id = ${req.params.id};`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          console.log(result);
          res.send("Product updated...");
        });
    },
    // Crea un endpoint que muestre todos los productos
    showAll(req,res){
      let sql = `SELECT * FROM ecommerce.products`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          console.log(result);
          res.send(result);
        });
    },
    showAllCategories(req,res){
      let sql = `SELECT name_product, name_category FROM ecommerce.productoscategorias 
INNER JOIN ecommerce.categories ON categories.id = productoscategorias.category_id
INNER JOIN ecommerce.products ON products.id = productoscategorias.product_id;`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          console.log(result);
          res.send(result);
        });
    },
    showId(req,res){// Crea un endpoint para mostrar un producto segun su id
      let sql = `SELECT * FROM ecommerce.products WHERE id=${req.params.id}`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          console.log(result);
          res.send(result);
        });
    },
    showDesc(req,res){// Crea un endpoint que muestre de forma descendente los productos.
      let sql = `SELECT * FROM ecommerce.categories ORDER BY id DESC`;
      db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
      });
  },
  // Crea un endpoint donde puedas buscar un producto por su nombre
  showName(req,res){
    let sql = `SELECT * FROM ecommerce.products WHERE name_product LIKE '%${req.params.name}%'`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          console.log(result);
          res.send(result);
        });
  },
  delete(req,res){//Crea un endpoint donde puedas eliminar un producto por su id
    let sql = `DELETE FROM ecommerce.products WHERE id = ${req.params.id};`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  }
}
module.exports = ProductController