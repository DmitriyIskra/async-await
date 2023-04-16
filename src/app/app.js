import read from './reader';
import json from './parser';
import GameSavingLoader from './loader';

async function main() {
  try {
  return await GameSavingLoader.load()
  } catch (error) {
    console.log(error);
  }
}

const gameSaving = main(); 

