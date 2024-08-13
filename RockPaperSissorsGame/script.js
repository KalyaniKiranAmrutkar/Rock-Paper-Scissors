let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genComputerChoice= () =>{
  // Rock , Paper , Scissors
  const options=["rock" , "paper" ,"scissors"];
  const randomIdx=Math.floor(Math.random()*3);
  return options[randomIdx];
};

const drawGame =() =>{
  msg.innerText="Game Was Draw. Play Again";
  msg.style.backgroundColor="#254336";
};

const showWinner =(userWin,userChoice,compChoice) =>{
   if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
   }
   else{
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
   }
};


const playGame =(userChoice) =>{
   console.log(" user choice = "+userChoice);
   //Generate Computer Choice
   const compChoice=genComputerChoice();
   console.log(" comp choice = "+compChoice);

   if(userChoice===compChoice){
    //Game Draw
    drawGame();
   }
   else{
    let userWin=true;
       if(userChoice=="rock"){
          //comp choice - paper or scissors
           userWin= compChoice==="paper"?false:true;
      } 
      else if(userChoice=="paper")
      {
        //comp choice - rock or scissors
        userWin= compChoice==="scissors"?false:true;
      }  else{
         //comp choice - rock , paper
         userWin= compChoice==="rock"?false:true;
      }
      showWinner(userWin,userChoice,compChoice);
   }
}

choices.forEach((choice) =>{
  choice.addEventListener("click" ,() =>{
     const userChoice=choice.getAttribute("id");
     playGame(userChoice);
  });
});