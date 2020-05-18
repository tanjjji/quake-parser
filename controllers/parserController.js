const fs = require('fs');
const Parser = require('../services/parserServices.js');

module.exports = {

    async index (req,res){
        res.json(await Parser.getAllGames());
    },

    async show (req,res){
        if (isNaN(req.params.id)){
            res.status(400).json({message: 'Id em formato inválido'})
        }else{
            res.json(await Parser.getAllGames(req.params.id));
        }
    }
    
}