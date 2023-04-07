export default class GameSavingLoader {
    constructor() {
        this.gameSaving = null;
    }

    load() {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            },1000)
        })
    }
}  