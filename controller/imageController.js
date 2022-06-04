const db = require('../models');

const multer = require('multer');
const path = require('path');


const image = db.images;


/// add image to databse

const addImage = async (req,res) => {
    try {
        let data = {
        categorieId: req.body.categorieId,
        title : req.body.title,
        description : req.body.description,
        file : req.file.path
    };

    console.log(data);

    const im = await image.create(data);
    res.status(200).send(im);    
    } catch (error) {
        res.status(500).send(error.message);
    }
}

/// Get all images

const getAllImages = async (req, res) => {
    const im = await image.findAll({});
    // const categ_img = categories.findOne({id: im.categorieId});
    // console.log(categ_img);
    res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
    res.setHeader('Content-Range', 'categories 0-5/5');
    res.status(200).send(im);
}

const getImage = async (req, res) => {
    let id = req.params.id;
    let im = image.findOne({where:{id: id}});
    res.status(200).send(im);
}


const deletImage = async (req, res) => {
    let id = req.params.id;
    image.destroy({where:{id: id}});
}


/// upload image controller

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Donner un format approprié')
    }
}).single('image')

module.exports = {
    upload,
    addImage,
    getImage,
    getAllImages,
    deletImage

}
