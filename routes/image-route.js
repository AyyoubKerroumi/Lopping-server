const imageController = require('../controller/imageController');

const router = require('express').Router();


/// post requests

router.post('/addIamge',imageController.addImage);

/// get requests
router.get('/getImageInfo/:id',imageController.getImage)
router.get('/AllImages',imageController.getAllImages);


/// delte requests

router.delete('/deleteImage:id',imageController.deletImage);

module.exports = router;