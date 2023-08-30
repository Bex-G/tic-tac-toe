const playerFactory = (name, token, score) => {
    return {name, token, score};
}

const playerX = playerFactory("X", "X", 0);
const playerO = playerFactory("O", "O", 0);

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
    function addToBoard(target) {
        gameBoard[target] = token;
    }
    function takeTurns(turnNumber) {
        if (turnNumber % 2 === 0) {
            return token = "X";
        } else {
            return token = "O";
        }
    }
    function changeTurnDisplay(turnNumber) {
            if (turnNumber % 2 === 0) { 
                display.textContent = playerO.name + "'s turn";      
            } else {
                display.textContent = playerX.name + "'s turn";
            }
    }
    function callTheRound() {
        function findWinner(winningToken) {
            if (winningToken === playerX.token) {
                display.textContent = playerX.name + " wins!";
            } else {
                display.textContent = playerO.name + " wins!";
            }
        }
        if (gameBoard.a1 === gameBoard.a2 && gameBoard.a2 === gameBoard.a3) {
            let winningToken = gameBoard.a1;
            findWinner(winningToken);
        } else if (gameBoard.b1 === gameBoard.b2 && gameBoard.b2 === gameBoard.b3) {
            let winningToken = gameBoard.b1;
            findWinner(winningToken);
        } else if (gameBoard.c1 === gameBoard.c2 && gameBoard.c2 === gameBoard.c3) {
            let winningToken = gameBoard.c1;
            findWinner(winningToken);
        } else if (gameBoard.a1 === gameBoard.b1 && gameBoard.b1 === gameBoard.c1) {
            let winningToken = gameBoard.a1;
            findWinner(winningToken);
        } else if (gameBoard.a2 === gameBoard.b2 && gameBoard.b2 === gameBoard.c2) {
            let winningToken = gameBoard.a2;
            findWinner(winningToken);
        } else if (gameBoard.a3 === gameBoard.b3 && gameBoard.b3 === gameBoard.c3) {
            let winningToken = gameBoard.a3;
            findWinner(winningToken);
        } else if (gameBoard.a1 === gameBoard.b2 && gameBoard.b2 === gameBoard.c3) {
            let winningToken = gameBoard.a1;
            findWinner(winningToken);
        } else if (gameBoard.a3 === gameBoard.b2 && gameBoard.b2 === gameBoard.c1) {
            let winningToken = gameBoard.a3;
            findWinner(winningToken);
        } else if (turnNumber === 10) {
            display.textContent = "it's a tie";
        }
    }
    return {gameBoard, takeTurns, changeTurnDisplay, addToBoard, callTheRound};
})();

const display = document.getElementById('display');
display.textContent = playerX.name + "'s turn";

let turnNumber = 1;

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', function fillBox(e) {

    ++turnNumber;
    
    game.takeTurns(turnNumber);
    game.changeTurnDisplay(turnNumber);

    const boxContent = document.createTextNode(token);
    box.appendChild(boxContent);
    
    let target = e.target.id;

    game.addToBoard(target);
    game.callTheRound();
    }, {once : true});
})