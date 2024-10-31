const max = prompt("Enter the max number");
const random = Math.floor(Math.random()*max) + 1;
let guess = prompt("Enter the number");
while(true){
    if(guess == "quit"){
        console.log("User Quit");
        break;
    }
    if(guess == random){
        console.log("Congrats you are right !!");
        break;
    }
    else if(guess < random){
        guess = prompt("Your guess was too small!! Please try again");
    }
    else{
        guess = prompt("Your guess was too large !! Please try again");
    }
}
