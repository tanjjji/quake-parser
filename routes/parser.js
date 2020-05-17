const express = require('express'); 
const router = express.Router();

const parserController = require ('../controllers/parserController');

router.get("/",parserController.index); 

module.exports = router;