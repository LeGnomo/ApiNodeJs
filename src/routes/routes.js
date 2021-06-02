const express = require('express');
const router = express.Router();



//Controllers
const bannerController = require("../controllers/bannerController");

router.get('/', (req, res, next) => {
  res.status(200).send({
    title: 'Api Node',
    version: '1.0.0'
  });
});

router.get("/getBanner",bannerController.get);

module.exports = router;