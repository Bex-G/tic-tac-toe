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
    function callTheRound() {
        function roundWinner(winningToken) {
            if (winningToken === token) {
                console.log("player wins!")
            } else {
                console.log("computer wins")
            }
        }
        if (gameBoard.a1 === gameBoard.a2 && gameBoard.a2 === gameBoard.a3) {
            let winningToken = gameBoard.a1;
            roundWinner(winningToken);
        } else if (gameBoard.b1 === gameBoard.b2 && gameBoard.b2 === gameBoard.b3) {
            let winningToken = gameBoard.b1;
            roundWinner(winningToken);
        } else if (gameBoard.c1 === gameBoard.c2 && gameBoard.c2 === gameBoard.c3) {
            let winningToken = gameBoard.c1;
            roundWinner(winningToken);
        } else if (gameBoard.a1 === gameBoard.b1 && gameBoard.b1 === gameBoard.c1) {
            let winningToken = gameBoard.a1;
            roundWinner(winningToken);
        } else if (gameBoard.a2 === gameBoard.b2 && gameBoard.b2 === gameBoard.c2) {
            let winningToken = gameBoard.a2;
            roundWinner(winningToken);
        } else if (gameBoard.a3 === gameBoard.b3 && gameBoard.b3 === gameBoard.c3) {
            let winningToken = gameBoard.a3;
            roundWinner(winningToken);
        } else if (gameBoard.a1 === gameBoard.b2 && gameBoard.b2 === gameBoard.c3) {
            let winningToken = gameBoard.a1;
            roundWinner(winningToken);
        } else if (gameBoard.a3 === gameBoard.b2 && gameBoard.b2 === gameBoard.c1) {
            let winningToken = gameBoard.a3;
            roundWinner(winningToken);
        } 
    }
    return {gameBoard, addToBoard, callTheRound};
})();

let token = "X"; //global filler value

//displays tokens and works with addToBoard to update gameBoard values

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', function fillBox(e) {

    const boxContent = document.createTextNode(token)
    box.appendChild(boxContent);
    
    let target = e.target.id;
    
    game.addToBoard(target);
    game.callTheRound();
    }, {once : true});
});


// quick method to create players

const playerFactory = (name, token) => {
    return {name, token};
}

const bex = playerFactory("Bex", "X");
const carly = playerFactory("Carly", "O");
