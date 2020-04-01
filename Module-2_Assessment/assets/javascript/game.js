const a1 = 'star';
const a2 = 'galaxy';
const a3 = 'nebula';
const a4 = 'asteroid';
const a5 = 'exoplanet';
const a6 = 'satallite';
const a7 = 'comet';
const a8 = 'moon';
const a9 = 'blackhole';
const a10 = 'meteor';
const a11 = 'orbit';
const a12 = 'solarsystem';
const answerSet= [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12];
const letter = document.querySelector('#letters');
const attempts = document.querySelector('#attempts');
const answer = document.querySelector('#answer');
const result = document.querySelector('#winorlose');
const wins = document.querySelector('#wincount');
let word = "";
let progress = "";
answer.innerHTML= '<div class="text-center">Type Any Key To Begin Game</div>';

const startGame = ()=>{
  document.removeEventListener('keyup', startGame)
  document.querySelector('#img').src = 'assets/images/sun1.jpg';
  result.innerHTML = "<div class='text-white text-center'><h1>Guess Word Before We Crash!</h1></div>";
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
    } else{
      progress += " _";
    }
  }
  for(var i=0; i< word.length; i++){
    if(progress.indexOf(word[i]) > -1){
      success += " " + word[i];
    } else{
      success += " _";
    }
  }
  for(var i=0; i< success.length; i++){
    answer.innerText += " " + success[i];
  }
  if(success.indexOf(" _") === -1){
    let audio = new Audio('assets/sounds/win.mp3')
    audio.play();
    answer.innerText = "Press Any Key To Play Again";
    attempts.innerText = 0; 
    result.innerHTML = '<div class="text-white text-center"><h1>YOU LIVE TO SEE ANOTHER DAY!</h1></div>';
    wincount.innerText = parseInt(win) + 1;
    document.removeEventListener('keyup', addLetter);
    document.addEventListener('keyup', startGame);
  } else if(life < 1){
    let audio = new Audio('assets/sounds/lose.wav')
    audio.play();
    answer.innerText = "Press Any Key To Play Again";
    attempts.innerText = 0; 
    document.querySelector('#img').src = 'assets/images/sun5.jpg';
    result.innerHTML = '<div class="text-white text-danger"><h1>YOU HAVE BEEN VAPORIZED!</h1></div>';
    document.removeEventListener('keyup', addLetter);
    document.addEventListener('keyup', startGame);
  } else if(life < 7 && life > 4){
    document.querySelector('#img').src = 'assets/images/sun2.jpg';
    result.innerHTML = '<div class="text-white text-center"><h1>UMM... IT"S GETTING HOTTER...</h1></div>';
  } else if(life < 5 && life > 2){
    document.querySelector('#img').src = 'assets/images/sun3.jpg';
    result.innerHTML = '<div class="text-white text-center"><h1>OK, YOU ARE RUNNING OUT OF TIME!</h1></div>';
  } else if(life < 3 && life > 1){
    document.querySelector('#img').src = 'assets/images/sun4.jpg';
    result.innerHTML = '<div class="text-white text-center"><h1>OMG... YOU ARE GUNNA FRY...</h1></div>';
  } 
}

document.addEventListener('keyup', startGame);