const a1 = 'star';
const a2 = 'galaxy';
const a3 = 'nebula';
const a4 = 'asteroid';
const a5 = 'exoplanet';
const a6 = 'satallite';

const answerSet= [a1, a2, a3, a4, a5, a6];

let word = answerSet[Math.floor(Math.random() * answerSet.length)];

const answer = document.querySelector('#answer');

const letter = document.querySelector('#letters');

const attempts = document.querySelector('#attempts');

const result = document.querySelector('#winorlose');


for(var i = 0; i<word.length; i++){
    answer.innerText += "_";
}

let progress = "";

const addLetter = function(event){
  answer.innerText = "";
    let guess = event.key;
    let success = "";
    let life = attempts.innerText;
    attempts.innerText = life - 1;
    letter.innerText += guess;
    for(let i=0; i < word.length; i++){
       if(word[i] === guess){
         progress += guess;
       }else{
         progress += "_";
       }
    }
    for(var i=0; i< word.length; i++){
      if(progress.indexOf(word[i]) > -1){
      success += word[i];
    } else {
      success += "_";
    }
  }
   for(var i=0; i< success.length; i++){
     answer.innerText += success[i];
   }
   if(success.indexOf("_") === -1){
    winorlose.innerHTML = '<h1>YOU LIVE TO SEE ANOTHER DAY!</h1>'
  } 
    if (life < 1){
    winorlose.innerHTML = '<h1>YOU DIED</h1>'
  }
}
  


    


document.addEventListener('keyup', addLetter);