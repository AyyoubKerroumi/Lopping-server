const db = require('../models');

const multer = require('multer');
const path = require('path');

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

const getAllCategories = async(req, res) => {
    let categorie = await categories.findAll({});
    res.status(200).send(categorie);
}

module.exports = {
    addCategory,
    getAllCategories
}