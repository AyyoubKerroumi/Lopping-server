const db = require('../config');
const dba = require('../models');
const sequelize = require('../models').sequelize;
const {updateDoc,doc } = require('firebase/firestore');

const image = dba.images;

const createGame = async(req, res)=>{
    const gameId = req.body;
    // get random image
    const im = await image.findOne({ 
        order: sequelize.random() 
      });
    console.log(im.dataValues.file);
    const game = doc(db,"games","new-game-id");
    await updateDoc(game, {
        url: im.dataValues.file
      });
      
    res.send(im);

}

module.exports = {createGame};