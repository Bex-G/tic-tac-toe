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
                display.textContent = playerX.name + " won the game!";
                return gameover = true;
            } else {
                display.textContent = playerO.name + " won the game!";
                return gameover = true;
            }
        }
        if (gameBoard.a1 === gameBoard.a2 && gameBoard.a2 === gameBoard.a3) {
            declareWinner();
            revertBoard();
        } else if (gameBoard.b1 === gameBoard.b2 && gameBoard.b2 === gameBoard.b3) {
            declareWinner();
            revertBoard();
        } else if (gameBoard.c1 === gameBoard.c2 && gameBoard.c2 === gameBoard.c3) {
            declareWinner();
            revertBoard();
        } else if (gameBoard.a1 === gameBoard.b1 && gameBoard.b1 === gameBoard.c1) {
            declareWinner();
            revertBoard();
        } else if (gameBoard.a2 === gameBoard.b2 && gameBoard.b2 === gameBoard.c2) {
            declareWinner();
            revertBoard();
        } else if (gameBoard.a3 === gameBoard.b3 && gameBoard.b3 === gameBoard.c3) {
            declareWinner();
            revertBoard();
        } else if (gameBoard.a1 === gameBoard.b2 && gameBoard.b2 === gameBoard.c3) {
            declareWinner();
            revertBoard();
        } else if (gameBoard.a3 === gameBoard.b2 && gameBoard.b2 === gameBoard.c1) {
            declareWinner();
            revertBoard();
        } else if (turnNumber === 10) {
            display.textContent = "It's a tie - try again!";
            revertBoard();
            return gameover = true;
        }
    }
    function revertBoard() {
        return gameBoard = {
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
    }
    function reset() {
        gameover = false;
        turnNumber = 1;
        document.getElementById('display').textContent = playerX.name + "'s turn";
        revertBoard();
        document.getElementById('a1').textContent = "";
        document.getElementById('a2').textContent = "";
        document.getElementById('a3').textContent = "";
        document.getElementById('b1').textContent = "";
        document.getElementById('b2').textContent = "";
        document.getElementById('b3').textContent = "";
        document.getElementById('c1').textContent = "";
        document.getElementById('c2').textContent = "";
        document.getElementById('c3').textContent = "";
    }
    return {gameBoard, takeTurns, addToBoard, callTheRound, reset};
})();

let gameover = false;
let turnNumber = 1; //global starting value for event-triggered counter
document.getElementById('display').textContent = playerX.name + "'s turn"; //dynamic display

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function fillBox(e) {

        if (box.textContent !== "X" && box.textContent !== "O" && gameover !== true) {
    
            ++turnNumber;
            game.takeTurns(turnNumber);

            box.textContent = token;

            let target = e.target.id;

            game.addToBoard(target);
            game.callTheRound();
        } else if (gameover === true) {
            game.reset();
        }
    })
});

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
    game.reset();
});
