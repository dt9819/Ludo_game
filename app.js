var scores, roundScore, gamePlaying;
   scores = [0,0];
   roundScore = 0;
   gamePlaying = true;
document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function() {
    
    if(gamePlaying){
    // 1. Random number 
    var dice = Math.floor(Math.random() * 6) + 1;       

    // 2. Display the Result 
    var diceDOM =  document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
                       
    // 3. update the round score IF the rolled no was not a 1 
    if(dice !== 1){
        //Add Score
        roundScore += dice;
        document.querySelector('#current').textContent = roundScore;
    } else{
       //nextt Player
         nextPlayer();
        
    }
   }  
});
