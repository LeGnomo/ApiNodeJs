const express = require('express');
const router = express.Router();



//Controllers
const heroController = require("../controllers/heroController");
const productController = require("../controllers/productController");
const categoryController = require("../controllers/categoryController");

router.get('/', (req, res, next) => {
  res.status(200).send({
    title: 'Api Node',
    version: '1.0.0'
  });
});

router.get("/getHero",heroController.get);

router.get("/getProductByCategory/:id",productController.getByCategory);

router.get("/getCategory",categoryController.getAll);

module.exports = router;