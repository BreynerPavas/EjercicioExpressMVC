const db = require("../config/database")

// Crea un endpoint para crear una categoría y añade 2 categorías nuevas desde el postman
const CategoryController = {
    create(req,res){
        let sql = `INSERT INTO ecommerce.categories (name_category, _description) values
	('${req.body.name}', '${req.body.desc}')`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          console.log(result);
          res.send("Category added...");
        });
    },
    // Crea un endpoint para actualizar una categoría.
    update(req,res){
        let sql = `UPDATE ecommerce.categories 
SET name_category = '${req.body.name}', 
    _description = '${req.body.desc}' 
WHERE id = ${req.params.id};`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          console.log(result);
          res.send("Category updated...");
        });
    },
    
    showAll(req,res){
        let sql = `SELECT * FROM ecommerce.categories`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          console.log(result);
          res.send(result);
        });
    },
    //mostrar categoria segun id
    showId(req,res){
        let sql = `SELECT * FROM ecommerce.categories WHERE id=${req.params.id}`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          console.log(result);
          res.send(result);
        });
    }
    
    
}
module.exports = CategoryController;