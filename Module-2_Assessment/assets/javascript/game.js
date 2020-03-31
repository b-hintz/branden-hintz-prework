const a1 = 'star';
const a2 = 'galaxy';
const a3 = 'nebula';
const a4 = 'asteroid';
const a5 = 'exoplanet';
const a6 = 'satallite';

const answerSet= [a1, a2, a3, a4, a5, a6];

const letter = document.querySelector('#letters');

const attempts = document.querySelector('#attempts');

const answer = document.querySelector('#answer');

const result = document.querySelector('#winorlose');

const wins = document.querySelector('#wincount');

let word = "";

let progress = "";

result.innerHTML= '<div class="text-white text-center p-5"><h2>Type Any Key To Begin The Game</h2></div>';

const startGame = ()=>{
  document.removeEventListener('keyup', startGame)
  result.innerHTML = "<div class='text-white text-center p-5'><h2>Guess Word Before We Crash!</h2></div>";
  answer.innerText = "";
  letter.innerText = "";
  attempts.innerText = 9
  word = answerSet[Math.floor(Math.random() * answerSet.length)];
  for(var i = 0; i<word.length; i++){
    answer.innerText += " _";
    }
  progress = ""
  document.addEventListener('keyup', addLetter);
  }


const addLetter = (event) => {
    answer.innerText = "";
    let success = "";
    let life = attempts.innerText;
    let win = wincount.innerText;
    let guess = event.key;
    attempts.innerText = life - 1;
    letter.innerText += guess;
    for(let i=0; i < word.length; i++){
       if(word[i] === guess){
         progress += " " + guess;
       }else{
         progress += " _";
       }
    }
    for(var i=0; i< word.length; i++){
      if(progress.indexOf(word[i]) > -1){
      success += " " + word[i];
    } else {
      success += " _";
    }
  }
   for(var i=0; i< success.length; i++){
     answer.innerText += " " + success[i];
   }
   if(success.indexOf(" _") === -1){
    attempts.innerText = 0; 
    answer.innerText = "";
    result.innerHTML = '<div class="text-white text-center p-5"><h2>YOU LIVE TO SEE ANOTHER DAY!</h2><h4>Press Any Key To Play Again</h4></div>';
    wincount.innerText = parseInt(win) + 1;
    document.removeEventListener('keyup', addLetter);
    document.addEventListener('keyup', startGame);
    } else if (life < 1){
    attempts.innerText = 0; 
    answer.innerText = ""; 
    result.innerHTML = '<div class="text-white text-center p-5"><h2>YOU HAVE BEEN VAPORIZED!</h2><h4>Press Any Key To Play Again</h4></div>';
    document.removeEventListener('keyup', addLetter);
    document.addEventListener('keyup', startGame);
  }

}

document.addEventListener('keyup', startGame);