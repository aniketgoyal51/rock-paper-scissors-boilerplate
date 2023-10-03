var paper=document.getElementById("paper");
var rock=document.getElementById("rock");
var scissor=document.getElementById("scissors");

var playerhand=document.getElementById("playerhand")

const btnbox=document.querySelectorAll("#btnbox")
const p1hand=document.getElementById("p1-hand");

var comph=document.getElementById("comp-hand")
var p1score=document.getElementById("p1s");
var p2score=document.getElementById("p2s");


var cscore=0;
var pscore=0;
p1score.textContent=pscore;
p2score.textContent=cscore;

var comphand=document.getElementById("comphand")

var won=document.getElementById("won")
var wwon=document.getElementById("wwon")
var pa=document.getElementById("playagain")

function randomise(){
    operators=Math.round(Math.floor(Math.random()*3));
    if (operators===1){
        comphand.src="./assets/"+paper.id+"-hand.png"
    }
    if (operators===2){
        comphand.src="./assets/"+rock.id+"-hand.png"
    }

    if (operators===0){
            comphand.src="./assets/"+scissor.id+"-hand.png"
    }
}
randomise()

var playerChoice=""
btnbox.forEach((img) => {
    img.onclick=(e)=>{
        if(e.target.matches("img")){
        // console.log(e.target.id)
        playerhand.src="./assets/"+(e.target.id)+"-hand.png";
        if(e.target.id === "rock"){
            playerChoice ="rock";
        }else if(e.target.id === "paper"){
            playerChoice ="paper";
        }else if(e.target.id === "scissors"){
            playerChoice ="scissors";
        }
        randomise()
        }
        // console.log(playerChoice)

console.log(playerChoice);
if(playerChoice==="paper"){
    console.log(playerChoice)
    if(operators===2){
        pscore=pscore+1
        p1score.textContent=pscore;
        // localStorage.setItem("cscore",cscore);
        

    }
    else if (operators===0){
        cscore=cscore+1
        p2score.textContent=cscore;
    }
}else if(playerChoice==="rock"){
    if(operators===1){
        cscore=cscore+1
        p2score.textContent=cscore;
    }
    else if (operators===0){
        pscore=pscore+1
        p1score.textContent=pscore;
    }
}else if(playerChoice==="scissors"){
    if(operators===2){
        cscore=cscore+1
        p2score.textContent=cscore;
    }
    else if (operators===1){
        pscore=pscore+1
        p1score.textContent=pscore;
    }
}
if(pscore===5){
    var btn=document.getElementsByClassName("btn");
    won.style.visibility="visible"
    wwon.innerHTML="Won"
    pa.style.visibility="visible"
    for (var i = 0; i < btn.length; i++) {
        btn[i].style.visibility = "hidden";
    }
}else if(cscore===5){
    var btn=document.getElementsByClassName("btn");
    won.style.visibility="visible"
    wwon.innerHTML="Lose"
    pa.style.visibility="visible"
    for (var i = 0; i < btn.length; i++) {
        btn[i].style.visibility = "hidden";
    }
}

}
    
})

console.log(pscore)
console.log(cscore)



pa.onclick=()=>{
    location.href="./index.html"
}

