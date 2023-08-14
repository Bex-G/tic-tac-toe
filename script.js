const game = (() => {
    let gameBoard = {
        'a1': "",
        'a2': "",
        'a3': "",
        'b1': "",
        'b2': "",
        'b3': "",
        'c1': "",
        'c2': "",
        'c3': "",
    }
    function addToBoard(target) {
        gameBoard[target] = token;
    }
    return {gameBoard, addToBoard}
})();

const playerFactory = (name, token) => {
    return {name, token};
}

const bex = playerFactory("Bex", "X");
const carly = playerFactory("Carly", "O");

let token = "X";

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', function fillBox(e) {

    const boxContent = document.createTextNode(token)

    let target = e.target.id;

    game.addToBoard(target);

    box.appendChild(boxContent);
    }, {once : true});
});