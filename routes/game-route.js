const gameController = require('../controller/game-controller');
const router =  require('express').Router();


router.get('/',gameController.createGame);

module.exports = router;