$(document).ready(function(){
  $("#play").on("click", function(){
    var userSelect = $(this).attr["id"]
    var compRPS = $(".selct")
    var randomRPS = compRPS[Math.floor(Math.random() * compRPS.length)];
    var compChoice = randomRPS.text
    
    
    switch(userSelect){
      case "Rock":
        compChoice == "Scissors"
        alert("You win")
        break;
      case "Rock":
        compChoice == "Paper"
        alert("You lost")
        break;
      case "Rock": 
        compChoice == "Rock"
        alert("Tie")
        break;
      default:
        alert("Error: Test failed")
      
        
    }
    debugger


    
  });

});