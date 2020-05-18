const express = require('express'); 
const router = express.Router();

const parserController = require ('../controllers/parserController');

router.get("/",parserController.index); // Route to get all games
router.get("/:id",parserController.show); //Route to get especific game by id

module.exports = router;