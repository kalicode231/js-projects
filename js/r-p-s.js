let player = confirm("Would You Like To Play A Game?");

if (player){
    let playerChoice = prompt("Choose Rock, Paper, Or Scissors");

    if (playerChoice){
        playerChoice = playerChoice.trim().toLowerCase();
        if(playerChoice=="rock"||playerChoice=="paper"||playerChoice=="scissors"){
            let computer = ["rock", "paper", "scissors"];
            let num = Math.floor(Math.random()*2 + 1);
            computer = computer[num];
            
            playerChoice == computer ? alert(`Tie game, You: ${playerChoice} Computer: ${computer}`) :
            computer=="rock" && playerChoice=="paper" ? alert(`You win, You: ${playerChoice} Computer: ${computer}`) :
            computer=="rock" && playerChoice=="scissors" ? alert(`Computer wins, You: ${playerChoice} Computer: ${computer}`) :
            computer=="paper" && playerChoice=="scissors" ? alert(`You win, You: ${playerChoice} Computer: ${computer}`) :
            computer=="paper" && playerChoice=="rock" ? alert(`Computer wins, You: ${playerChoice} Computer: ${computer}`) :
            computer=="scissors" && playerChoice=="rock" ? alert(`You win, You: ${playerChoice} Computer: ${computer}`) :
            computer=="scissors" && playerChoice=="paper" ? alert(`Computer wins, You: ${playerChoice} Computer: ${computer}`) :
            console.log("wahala");

        }else{
            alert("You didn't choose the right option");
        }

    }else{
        alert("You didn't choose, Try again");
    }

}else{
    alert("Maybe Some Other Time");
}

window.location.reload()