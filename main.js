var greeting = (userName)=>{
    var userName = prompt("Enter Name");
    console.log("Hello, " + userName + "!" );
}
greeting();

number = prompt("Pick a number?");
if (number > 0){
    console.log("Your number is positive!");}
else if (number == 0){
    console.log("Hey, it is 0! 0 is nothing!");}
else{
    console.log("Wow, your number is negative!");}

x = prompt("Pick a number?");
if (x >= 0.001 && x <= 0.9) {
    console.log("Your number is between 0 and 1");}
else{
    console.log("Wow, your number is not between 0 and 1");}