import read from './reader'
import json from './parser'
import GameSavingLoader from './loader';

const gameSavingLoader = new GameSavingLoader()

async function main() {
    try{
        await gameSavingLoader.load();
        const saving = await read();
        await gameSavingLoader.load();
        const jsonString = await json(saving);
        await gameSavingLoader.load()
        gameSavingLoader.gameSaving = JSON.parse(jsonString)
    }
    catch(error) {
        console.log(error)
    }
    finally{
        console.log(gameSavingLoader.gameSaving)
    }  
}

main() 


