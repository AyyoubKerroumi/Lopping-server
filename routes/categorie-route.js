const categorieController = require('../controller/categorieController');


const router =  require('express').Router();


/// post requests

router.post('/addCategorie',categorieController.addCategory);


/// get requests

router.get('/allCategories',categorieController.getAllCategories);


module.exports = router;