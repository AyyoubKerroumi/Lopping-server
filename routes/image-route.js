const imageController = require('../controller/imageController');
const multer = require('multer');
const upload = multer({dest : "../Images/"});
const path = require('path');

const router = require('express').Router();
const fs = require('fs');


/// post requests

// router.post('/',upload.single("image"),function(req,res,next){
//   console.log(req.file);
//   res.status(200);
// });

router.post('/',function(req,res,next){
  console.log(req);
  next();
},imageController.upload,imageController.addImage);
// router.post('/', function (req, res, next) {
//   console.log(req.file);
//     // TODO: optionally validate `req.headers['content-type']`
//     // TODO: sanitize `req.params.file` before
//     // using it to create the filename
//     var filename = req.body.file.title;
//     var diskStream = fs.createWriteStream(path.join(__dirname, 'Images', filename));
//     req.pipe(diskStream).on('finish', function() {
//       res.send('got that');
//     });
//   });
/// get requests
router.get('/:id',imageController.getImage)
router.get('/',imageController.getAllImages);


/// delte requests

router.delete('/:id',imageController.deletImage);

module.exports = router;