import GameSavingLoader from '../loader';

test('Testing async await', async () => {
        try{
            const gameSaving = await GameSavingLoader.load();
            return gameSaving
        }
        catch(error) {
            console.log(error)
        }


    expect(gameSaving).toEqual(
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