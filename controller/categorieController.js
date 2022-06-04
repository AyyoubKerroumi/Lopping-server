const db = require('../models');
const categories = db.categories;

// 1. create categorie


const addCategory = async(req,res) => {
    try {
        let data = {
            title: req.body.title,
            description: req.body.description
        }
        const categorie = await categories.create(data);
        res.status(200).send(categorie);
    } catch (error) {
        res.status(400).send(error.message);
    }
    
}

const getCategorieByTitle = async(req, res) => {
    try {
        let categorie = await categories.findAll({where:{title: req.body.title}});
        res.status(200).send(categorie);
    } catch (error) {
        res.status(400).send(error);
    }
} 

const updateCategorie = async(req, res) => {
    try{
        let id = req.params.id;
        const catego = await categories.findOne({ where: { id: id } });
        if(catego){
            catego.title = req.body.title;
            catego.description = req.body.description;
            await catego.save();
        }
    }catch (error) {
        res.status(400).send(error);
    }
}

const getCategorie = async(req, res) => {
    try {
        let categorie = await categories.findOne({where:{id: req.params.id}});
        let data = {};
        data.data = categorie;
        res.status(200).send(categorie);
    } catch (error) {
        res.status(400).send(error);
    }
}

const getAllCategories = async(req, res) => {
    let categorie = await categories.findAll({});
    res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
    res.setHeader('Content-Range', 'categories 0-5/5');
    res.status(200).send(categorie);
}

const deleteCategorie = async(req, res) => {
    let id = req.params.id;
    categories.destroy({where: {id: id}});
}

module.exports = {
    addCategory,
    getAllCategories,
    getCategorieByTitle,
    deleteCategorie,
    getCategorie,
    updateCategorie
}