let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let newgamebtn = document.querySelector("#newgame-btn");
let winMsg= document.querySelector("#winMsg");
let msgContainer= document.querySelector(".msg-container");
let turn0=true;

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


    boxes.forEach((box)=>
        {
           box.addEventListener("click",()=>{
            if(turn0){
             box.innerText="0";
             box.style.color="#bc6c25";
              turn0=false;
            }else{
                box.innerText="X";
                box.style.color="#606c38";
                turn0=true;
            } 
            box.disabled=true;
            checkWinner();
           });
          
        });
        
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

    const showWinner=(winner)=>{
        winMsg.innerText=`CONGRATULATIONS , The Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
     };

    const checkWinner = ()=>{
        for(let value of winPatterns){
            let pos1val= boxes[value[0]].innerText;
            let pos2val= boxes[value[1]].innerText;
            let pos3val= boxes[value[2]].innerText;

            if(pos1val!="" && pos2val!=""&& pos3val!=""){
                if(pos1val===pos2val && pos2val===pos3val){
                   showWinner(pos1val); 
                }
            }
        }
    };

    newgamebtn.addEventListener("click",resetGame);
    resetbtn.addEventListener("click",resetGame);
