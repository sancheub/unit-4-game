//When document ready...
    $(document).ready(function(){

//-------------------------------------------------------

// Set random number between 19-120
    var Random=Math.floor(Math.random()*101+19)

// Set random numbers for each jewel between 1-12
    var randomDiamond= Math.floor(Math.random()*11+1)
    var randomEmmerald= Math.floor(Math.random()*11+1)
    var randomGem= Math.floor(Math.random()*11+1)
    var randomRuby= Math.floor(Math.random()*11+1)

// Variables results
    var playerScore= 0; 
    var wins= 0;
    var losses = 0;

//-------------------------------------------------------
// Random number id
    $('#randomNumber').text(Random);

// Winner & loser numbers id
    $('#theWinnerNumber').text(wins);
    $('#theLooserNumber').text(losses);

//-------------------------------------------------------

//Crystal on-clicks
    $('#diamondId').on ('click', function(){
        playerScore = playerScore + randomDiamond;
      $('#totalScore').text(playerScore); 
          if (playerScore == Random){
            winning();
          }
          else if ( playerScore > Random){
            losing();
          }   
    })  
    $('#emmeraldId').on ('click', function(){
        playerScore = playerScore + randomEmmerald;
      $('#totalScore').text(playerScore); 
          if (playerScore == Random){
            winning();
          }
          else if ( playerScore > Random){
            losing();
          } 
    })  
    $('#gemId').on ('click', function(){
        playerScore = playerScore + randomGem;
      $('#totalScore').text(playerScore);
            if (playerScore == Random){
            winning();
          }
          else if ( playerScore > Random){
            losing();
          } 
    })  
    $('#rubyId').on ('click', function(){
        playerScore = playerScore + randomRuby;
      $('#totalScore').text(playerScore); 
            if (playerScore == Random){
            winning();
          }
          else if ( playerScore > Random){
            losing();
          }
    }); 
    
//-------------------------------------------------------

//Winner number sum
  function winning(){
    alert("Well well, you're a winner!");
      wins++; 
      $('#theWinnerNumber').text(wins);
      reset();
    }
  
//Loser number sum
    function losing(){
    alert ("You're a looooooser");
      losses++;
      $('#theLooserNumber').text(losses);
      reset()
    }
    
//Game reset
  function reset(){
      Random=Math.floor(Math.random()*101+19);
      $('#randomNumber').text(Random);
      randomDiamond= Math.floor(Math.random()*11+1);
      randomEmmerald= Math.floor(Math.random()*11+1);
      randomGem= Math.floor(Math.random()*11+1);
      randomRuby= Math.floor(Math.random()*11+1);
      playerScore= 0;
      $('#totalScore').text(playerScore);
      } 
    

  }); 

// Tan-tán