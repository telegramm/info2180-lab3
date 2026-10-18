document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("board");
    const squares = board.getElementsByTagName("div");
    const status = document.getElementById("status");
    const newGame = document.querySelector(".btn");

    let currentPlayer = "X";

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add("square");

        squares[i].addEventListener("click", function () {
            this.textContent = currentPlayer;
            this.classList.add(currentPlayer);

            checkWinner();

            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        });

        squares[i].addEventListener("mouseover", function () {
            this.classList.add("hover");
        });

        squares[i].addEventListener("mouseout", function () {
            this.classList.remove("hover");
        });
    }

    function checkWinner() {
        for (let i = 0; i < winningCombinations.length; i++) {
            const combination = winningCombinations[i];

            const a = squares[combination[0]].textContent;
            const b = squares[combination[1]].textContent;
            const c = squares[combination[2]].textContent;

            if (a !== "" && a === b && b === c) {
                status.textContent = "Congratulations! " + a + " is the Winner!";
                status.classList.add("you-won");
            }
        }
    }

    newGame.addEventListener("click", function () {
        for (let i = 0; i < squares.length; i++) {
            squares[i].textContent = "";
            squares[i].classList.remove("X");
            squares[i].classList.remove("O");
        }

        status.textContent = "Move your mouse over a square and click to play an X or an O.";
        status.classList.remove("you-won");

        currentPlayer = "X";
    });
});