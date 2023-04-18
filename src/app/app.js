
import GameSavingLoader from './loader';

(async function main() {
  const gameSaving = await GameSavingLoader.load()

  console.log(gameSaving)
}())

 

