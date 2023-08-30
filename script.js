const playerFactory = (name, token) => {
    return {name, token};
};

const playerX = playerFactory("X", "X");
const playerO = playerFactory("O", "O");

const game = (() => {
    let gameBoard = {
        'a1': "1",
        'a2': "2",
        'a3': "3",
        'b1': "4",
        'b2': "5",
        'b3': "6",
        'c1': "7",
        'c2': "8",
        'c3': "9",
    }   
    function addToBoard(target) { //modifies gameBoard object for running equality checks
        gameBoard[target] = token;
    }
    function takeTurns(turnNumber) { //changes display and switches token value with each turn
        if (turnNumber % 2 === 0) {
            display.textContent = playerO.name + "'s turn"; 
            return token = "X";
        } else {
            display.textContent = playerX.name + "'s turn";
            return token = "O";
        }
    }
    function callTheRound() {
        function declareWinner() {
            if (token === playerX.token) {
                display.textContent = playerX.name + " wins!";
            } else {
                display.textContent = playerO.name + " wins!";
            }
        }
        if (gameBoard.a1 === gameBoard.a2 && gameBoard.a2 === gameBoard.a3) {
            declareWinner();
        } else if (gameBoard.b1 === gameBoard.b2 && gameBoard.b2 === gameBoard.b3) {
            declareWinner();
        } else if (gameBoard.c1 === gameBoard.c2 && gameBoard.c2 === gameBoard.c3) {
            declareWinner();
        } else if (gameBoard.a1 === gameBoard.b1 && gameBoard.b1 === gameBoard.c1) {
            declareWinner();
        } else if (gameBoard.a2 === gameBoard.b2 && gameBoard.b2 === gameBoard.c2) {
            declareWinner();
        } else if (gameBoard.a3 === gameBoard.b3 && gameBoard.b3 === gameBoard.c3) {
            declareWinner();
        } else if (gameBoard.a1 === gameBoard.b2 && gameBoard.b2 === gameBoard.c3) {
            declareWinner();
        } else if (gameBoard.a3 === gameBoard.b2 && gameBoard.b2 === gameBoard.c1) {
            declareWinner();
        } else if (turnNumber === 10) {
            display.textContent = "it's a tie";
        }
    }
    return {gameBoard, takeTurns, addToBoard, callTheRound};
})();

document.getElementById('display').textContent = playerX.name + "'s turn"; //dynamic display

let turnNumber = 1; //global starting value for event-triggered counter

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function fillBox(e) {

    ++turnNumber;

    game.takeTurns(turnNumber);

    const boxContent = document.createTextNode(token);
    box.appendChild(boxContent);
    
    let target = e.target.id;
    game.addToBoard(target);
    game.callTheRound();
    }, {once : true});
})