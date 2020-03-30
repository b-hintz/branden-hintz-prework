const letter = document.querySelector('#letters');

const attempts = document.querySelector('#attempts');

const addLetter = function(event){
    let me = event.key;
    letter.innerText += "  " + me;
}

document.addEventListener('keyup', addLetter);