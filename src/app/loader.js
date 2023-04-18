import read from "./reader";
import json from "./parser";
import GameSaving from './gamesaving'

export default class GameSavingLoader {  

  static async load() {
          try {
            const saving = await read();
            const jsonString = await json(saving);
            const objGameSaving = JSON.parse(jsonString);
            const gameSaving = new GameSaving(objGameSaving.id, objGameSaving.created, objGameSaving.userInfo);
            return gameSaving;
          } catch(error) {
            console.log(error);
          }
  }
  
}  
