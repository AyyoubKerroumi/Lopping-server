const categorieController = require('../controller/categorieController');
const { route } = require('./image-route');


const router =  require('express').Router();


/// post requests

router.post('/',categorieController.addCategory);


/// get requests

router.get('/',categorieController.getAllCategories);
router.get('/:id',categorieController.getCategorie);


//put requests

router.put('/:id',categorieController.updateCategorie);

/// delete requests
router.delete('/:id',categorieController.deleteCategorie);


module.exports = router;