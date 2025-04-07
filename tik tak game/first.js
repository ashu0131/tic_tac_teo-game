let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#rest");
let newgame=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-conatainer");
let msg= document.querySelector("#msg");

let turnO= true;
const winpatterns= [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
] 
boxes.forEach((box) => {
  box.addEventListener("click",() =>{
    console.log("box was click");
    if(turnO){
     box.innerText="O";
     turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
    chekwinner();
  } );
});
 
const showwinner=( winner)=> {
    msg.innerText=`congratulations ,winner is ${winner}`;
   // msgcontainer.classList.remove("hide");  
};
const chekwinner=()=>{
    for(pattern of winpatterns)
    {
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;
     if(pos1val !="" && pos2val !="" && pos3val !="")
     {
        if(pos1val===pos2val && pos2val===pos3val)
        {
            showwinner(pos1val);
        }
     }
    }
};