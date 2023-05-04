let audioturn=new Audio("xcode.mp3")
let gameover=new Audio("gameover.mp3")
let turn="X"
let zero="O"
let isgameover=false
//to change turn
const changeturn=()=>{
    if(turn=="X"){
        turn=zero
        // return turn
    }
    else if(turn=="O"){
        turn="X"
        
    }
}
let boxe=document.querySelectorAll(".box")
let img=document.querySelector(".imgbox")
const checkwin=()=>{
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],

    ]
    wins.forEach(e => {
        if((boxe[e[0]].innerText===boxe[e[1]].innerText)&&(boxe[e[2]].innerText===boxe[e[1]].innerText)&&(boxe[e[0]].innerText!=="" )){
            document.querySelector(".info").innerText=boxe[e[0]].innerText+" won"
            isgameover=true
            
            img.style.display="block"
            
        }

        
    });

}

//game logic
let boxes=document.querySelectorAll(".box")
// console.log(boxes);

boxes.forEach(element => {
    element.addEventListener("click",()=>{
        if(element.innerText===""){
            element.innerText=turn;
            changeturn();
            audioturn.play()
            checkwin();
            if(!isgameover){

                document.getElementsByClassName("info")[0].innerText="turn for  "+turn
            }

        }
    })
    
});

//reset button
reset=document.querySelector(".reset")
reset.addEventListener("click",()=>{
    let bola=document.querySelectorAll(".box")
    bola.forEach(le=>{
        le.innerText=""

    })
    
})