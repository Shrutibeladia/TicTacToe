//access the element 
let boxes = document.querySelectorAll(".box");

let resetbtn = document.querySelectorAll("#reset-btn");

let newGame = document.querySelector("#new-btn");

let msgContainer = document.querySelector(".msg-container");


let msg = document.querySelector("#msg");

let turnO = true; // playerX , playerO
let count = 0 ; //draw game 

const winPatterns = [
    [0,1,2] ,
    [0,3,6] ,
    [0,4,8] ,
    [1,4,7] ,
    [2,5,8] ,
    [2,4,6] ,
    [3,4,5] ,
    [6,7,8] ,
];


//func for resetgame or new game

const resetGame = () =>{
    turnO = true;
    count = 0;
    enableBoxes();
   msgContainer.classList.add("hide");
}

//func for boxes 
//loop all boxes means use foreach
boxes.forEach((box) =>{
    box.addEventListener("click" , () =>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        
        box.disable = true; // stops the game 
        count++;

        // check winnner 
        let isWinner = checkWinner();

        if(count===9 && !isWinner){
            gameDraw();
        }

    })
})

//gameDraw func 
const gameDraw = () =>{
    msg.innerText = `Game was a Tie`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

//disableBoxes func
const disableBoxes = () =>{
    for(let box of boxes){
        box.disable = true;
    }
}

//enableBoxes func
const enableBoxes = () =>{
    for(let box of boxes){
        box.disable = false;
        box.innerText = " ";
    }
}

//show winner 
const showWinner = (win) =>{
    msg.innerText = `Congratulations !! , winner is ${win}.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

//check winner
const checkWinner = () =>{
    for(let patterns of winPatterns){
        let position1 = boxes[patterns[0]].innerText;
        let position2 = boxes[patterns[1]].innerText;
        let position3 = boxes[patterns[2]].innerText;

        if(position1 != "" && position2 !="" && position3 !=""){
            if(position1===position2 && position2===position3){
                showWinner(position1);
                return true ;
            }
        }
    }
} ;

newGame.addEventListener("click" , resetGame);
resetbtn.addEventListener("click" , resetGame);