let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turn = "X";

const check = () => {
    if (boxes[0].innerHTML == "X" && boxes[1].innerHTML == "X" && boxes[2].innerHTML == "X") {
        alert("X won");    
    } else if (boxes[3].innerHTML == "X" && boxes[4].innerHTML == "X" && boxes[5].innerHTML == "X") {
        alert("X won");
    } else if (boxes[6].innerHTML == "X" && boxes[7].innerHTML == "X" && boxes[8].innerHTML == "X") {
        alert("X won");
    } else if (boxes[0].innerHTML == "X" && boxes[3].innerHTML == "X" && boxes[6].innerHTML == "X") {
        alert("X won");        
    } else if (boxes[1].innerHTML == "X" && boxes[4].innerHTML == "X" && boxes[7].innerHTML == "X") {
        alert("X won");                        
    } else if (boxes[2].innerHTML == "X" && boxes[5].innerHTML == "X" && boxes[8].innerHTML == "X") {
        alert("X won");
    } else if (boxes[0].innerHTML == "X" && boxes[4].innerHTML == "X" && boxes[8].innerHTML == "X") {
        alert("X won");
    } else if (boxes[2].innerHTML == "X" && boxes[4].innerHTML == "X" && boxes[6].innerHTML == "X") {
        alert("X won");        
    } else if (boxes[0].innerHTML == "O" && boxes[1].innerHTML == "O" && boxes[2].innerHTML == "O") {
        alert("O won");    
    } else if (boxes[3].innerHTML == "O" && boxes[4].innerHTML == "O" && boxes[5].innerHTML == "O") {
        alert("O won");
    } else if (boxes[6].innerHTML == "O" && boxes[7].innerHTML == "O" && boxes[8].innerHTML == "O") {
        alert("O won");
    } else if (boxes[0].innerHTML == "O" && boxes[3].innerHTML == "O" && boxes[6].innerHTML == "O") {
        alert("O won");        
    } else if (boxes[1].innerHTML == "O" && boxes[4].innerHTML == "O" && boxes[7].innerHTML == "O") {
        alert("O won");                        
    } else if (boxes[2].innerHTML == "O" && boxes[5].innerHTML == "O" && boxes[8].innerHTML == "O") {
        alert("O won");
    } else if (boxes[0].innerHTML == "O" && boxes[4].innerHTML == "O" && boxes[8].innerHTML == "O") {
        alert("O won");        
    } else if (boxes[2].innerHTML == "O" && boxes[4].innerHTML == "O" && boxes[6].innerHTML == "O") {
        alert("O won");
    }

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].innerHTML == "") {
            return;
        }    
    }
    alert("Draw");
}

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", () => {
        if (boxes[i].innerHTML == "" && turn == "X") {
            boxes[i].innerHTML = "X";
            turn = "O";
        } else if (boxes[i].innerHTML == "" && turn == "O") {
            boxes[i].innerHTML = "O";
            turn = "X";
        }
        check();
    })
}

reset.addEventListener("click", () => {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "";
    }
    turn = "X";
})
let computerPlaying = false;
let playerSymbol = "X";
let computerSymbol = "O";

reset.addEventListener("click", () => {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "";
    }
    turn = playerSymbol;
    if (computerPlaying) {
        setTimeout(() => {
            computerPlay();
        }, 500);
    }
})

function computerPlay() {
    let availableBoxes = [];
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].innerHTML == "") {
            availableBoxes.push(i);
        }
    }
    let randomIndex = Math.floor(Math.random() * availableBoxes.length);
    boxes[availableBoxes[randomIndex]].innerHTML = computerSymbol;
    check();
}

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", () => {
        if (boxes[i].innerHTML == "" && turn == playerSymbol) {
            boxes[i].innerHTML = playerSymbol;
            turn = computerSymbol;
            check();
            if (computerPlaying) {
                setTimeout(() => {
                    computerPlay();
                }, 500);
            }
        }
    })
}
