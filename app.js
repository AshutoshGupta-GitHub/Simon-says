let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (start == false) {
        start = true;
        console.log("Game started");

        levelUp();
    }
})

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 300);
}



function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // random colors btns
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);

    gameseq.push(randColor);
    console.log(randColor);

    gameFlash(randbtn);
    console.log(gameseq);
}

function checkAns(idx) {
    // console.log(`Level ${level}`);
    // let idx = level - 1;
    if (gameseq[idx] === userseq[idx]) {
        if (gameseq.length == userseq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game over! your score was <b> ${level}<b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },200);
        reset();
    }
}

function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    start = false;
    gameseq = [];
    userseq = [];
    level = 0;
}