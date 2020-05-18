const fs = require('fs');
const readline = require('readline');

const fileStream = fs.createReadStream('./data/games.log');

var Game = function (id){
    this.id=id;
    this.total_kills = 0; 
    this.players = [];
    this.kills = {};
}

Game.prototype.setTotalKills = function(){
    this.total_kills++;
}

Game.prototype.setPlayers = function(player){
    if (!this.players.includes(player) && player != '<world>'){
        this.players.push(player);
    }
}

Game.prototype.setKills = function(killed_by){
    if (killed_by == '<world>') return;
    if (!(killed_by in this.kills)){
        this.kills[killed_by] = 1;
    }else{
        this.kills[killed_by]++;
    }
}

async function cleanLogString (line){

    var index = line.lastIndexOf(':')+1;
    const string = line.substring(index);

    var splitKilled = string.split('killed');
    var splitBy = splitKilled[1].split('by');

    var killRecord = {
        killed_by: splitKilled[0].trim(),
        killed: splitBy[0].trim(),
        method: splitBy[1].trim()
    }
    return(killRecord)
}

module.exports = {

    async getAllGames (index){

        var gamesCounter = 0; 
        var result = [];
        var killRecord; 

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });
      
        for await (const line of rl) {
            if (line.includes('InitGame')){
                result.push(new Game(gamesCounter));
                gamesCounter++;
            }else if (line.includes('Kill')){

                killRecord = await cleanLogString(line);

                result[gamesCounter-1].setTotalKills();
                result[gamesCounter-1].setPlayers(killRecord.killed_by);
                result[gamesCounter-1].setPlayers(killRecord.killed);
                result[gamesCounter-1].setKills(killRecord.killed_by);
            }
        }
        
        if (index == null){
            return(result);
        }else{
            if (index > result.length){
                return;
            }else{
                return(result[index]);
            }
        }
        
    }
    
}