import read from '../reader';
import json from '../parser';
import GameSavingLoader from '../loader';

const gameSavingLoader = new GameSavingLoader();

test('Testing async await', async () => {
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


    expect(gameSavingLoader.gameSaving).toEqual(
        {
            id:9,
            created:1546300800,
            userInfo:{
                id:1,
                name:"Hitman",
                level:10,
                points:2000}
        }      
    )
})