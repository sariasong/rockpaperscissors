
function startGame(e) {
    var choice = e.target.id
    console.log(e)
    console.log(e.target)
    console.log(choice)
    var rand = compPlay();
    var result = winLose(choice, rand);
    var resultDiv = document.getElementById("results")
    resultDiv.innerHTML = "You chose " + choice + ".<br/> Computer chose " + rand + ".<br/> You " + result + "."
  }
  
  var choices = document.getElementsByClassName('choice')
  for (var i in choices) {
    try {
      choices[i].addEventListener('click', startGame)
    } catch(err) {
      //First load
    }
  }

  function compPlay() {
    var computerChoice = ["rock", "paper", "scissors"]; 
    var rand = computerChoice[Math.floor(Math.random() * computerChoice.length)]; 
    console.log(rand)
    
    return rand;
  }

  function winLose(player, computer) {
    var result;
    if (player == computer){
        result = "tied";
    }
    else if((player == "rock" && computer == "paper") ||
            (player == "paper" && computer == "scissors") ||
            (player == "scissors" && computer == "rock")){
        result = "lose";
    }
    else {
        result = "win"
    }

    return result;
  }
