let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');
let turn0 = true;

const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let xWins = 0;
let oWins = 0;

const xWinsElement = document.getElementById('x-wins');
const oWinsElement = document.getElementById('o-wins');

boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (turn0) {
            box.innerText = 'X';
            turn0 = false;
        } else {
            box.innerText = 'O';
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    let winner = false;
    winpatterns.forEach(pattern => {
        if (boxes[pattern[0]].innerText == boxes[pattern[1]].innerText && boxes[pattern[1]].innerText == boxes[pattern[2]].innerText && boxes[pattern[0]].innerText !== '') {
            alert(boxes[pattern[0]].innerText + ' won');
            if (boxes[pattern[0]].innerText === 'X') {
                xWins++;
                xWinsElement.textContent = xWins;
            } else if (boxes[pattern[0]].innerText === 'O') {
                oWins++;
                oWinsElement.textContent = oWins;
            }
            winner = true;
            resetGame();
        }
    });

    if (!winner) {
        let draw = true;
        boxes.forEach(box => {
            if (box.innerText === '') {
                draw = false;
            }
        });
        if (draw) {
            alert('Match is a draw');
            resetGame();
        }
    }
};

const resetGame = () => {
    boxes.forEach(box => {
        box.innerText = '';
        box.disabled = false;
    });
    turn0 = true;
};

reset.addEventListener('click', resetGame);
const newGame = document.getElementById('NewGame');

const newGameFunc = () => {
    resetGame();
    xWins = 0;
    oWins = 0;
    xWinsElement.textContent = xWins;
    oWinsElement.textContent = oWins;
};

newGame.addEventListener('click', newGameFunc);

