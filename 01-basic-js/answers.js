//print all even numbers from 0-100

//for (let num = 0; num <= 100; num++){
    //if (num % 2 == 0){
         // console.log("num =",num);
    //}
//}

//2. crate a game you start with any random number. ask the user to keep guessing the game number untill the user enters correct value.

let gameNum = 25;
let userNum = prompt("guess the game number : ");
while (userNum != gameNUm){
    userNum = prompt("you are entered wrong number , guess again : ");

}
console.log ("congratulation , you entered the right number")
