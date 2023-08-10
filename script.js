const gameBoard = (() => {
    let game = {
        a:["", "", ""],
        b:["", "", ""],
        c:["", "", ""],
    }
    return game;
})();

const playerFactory = (name, token) => {
    return {name, token};
}

const bex = playerFactory("Bex", "X");
const carly = playerFactory("Carly", "O");