const name = prompt("What's your name?")

if (name.length > 4){
    alert("Your name has more than 4 characters")
}else if (name.length < 4){
    alert("Your name has less than 4 characters")
} else{
    alert("Your name has 4 characters")
};