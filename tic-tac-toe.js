document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("board");
    const squares = board.getElementsByTagName("div");

    let currentPlayer = "X";

    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add("square");

        squares[i].addEventListener("click", function () {
            this.textContent = currentPlayer;
            this.classList.add(currentPlayer);

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
});