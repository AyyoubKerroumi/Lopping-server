const db = require('../config');
const dba = require('../models');
const sequelize = require('../models').sequelize;
const {updateDoc,doc } = require('firebase/firestore');
const { networkInterfaces } = require('os');

const nets = networkInterfaces();
const results = Object.create(null); // Or just '{}', an empty object

const image = dba.images;

const createGame = async(req, res)=>{
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
        const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
        if (net.family === familyV4Value && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
        }
    }
}
    const gameId = req.headers["gameid"];
    console.log(gameId);
    // // get random image
    const im = await image.findOne({ 
        order: sequelize.random() 
      });
    try {
      const game = doc(db,"games",gameId);
      await updateDoc(game, {
          image: results["Wi-Fi 2"][0]+":5000/"+im.dataValues.file,
          hint:im.dataValues.title
        });
      }catch(error) {
        res.status(400).send(error);
      }

}

module.exports = {createGame};