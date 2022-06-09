const db = require('../config');
const dba = require('../models');
const sequelize = require('../models').sequelize;
const {updateDoc,doc } = require('firebase/firestore');
const { networkInterfaces } = require('os');

const nets = networkInterfaces();
const results = Object.create(null); // Or just '{}', an empty object

const image = dba.images;

const createGame = async(req, res)=>{
    const gameId = req.headers["gameid"];
    console.log(gameId);
    // // get random image
    const im = await image.findOne({ 
        order: sequelize.random() 
      });
    try {
      const game = doc(db,"games",gameId);
      await updateDoc(game, {
          image: "http://40.123.248.207:200/"+im.dataValues.file,
          hint:im.dataValues.title
        });
        console.log(im);
        res.status(200).send(im);
      }catch(error) {
        res.status(400).send(error);
      }

}

module.exports = {createGame};