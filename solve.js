//Maximum between two numbers

var NumOne = 53;
var NumTwo = 24;

if( NumOne > NumTwo){
    console.log("NumOne is the maximum number")
}
else{
    console.log("NumTwo is the maximum number")
}


//maximum between three numbers.

var NumOne = 23;
var NumTwo = 50;
var NumThree = 30;

if( NumOne > NumTwo && NumOne > NumThree){
    console.log("NumOne is the maximum number")
}
else if( NumTwo > NumOne && NumTwo > NumThree){
    console.log("NumTwo is the maximum number")
}
else{
    console.log("NumThree is the maximum number")

}


//a number is negative, positive or zero.

var Number = 0;

if( Number > 0){
    console.log("This is a positive number")
}
else if( Number < 0){
    console.log("This is the negative number")
}
else{
    console.log("Zero")

}




//a number is divisible by 40 or not.



var Number = 81;

if( Number % 40 == 0){
    console.log("Divisible by 40")
}

else{
    console.log(" Not divisible by 40")

}


//a number is even or odd


var Number = 81;

if( Number % 2 == 0){
    console.log("This number is even")
}

else{
    console.log(" This number is odd")

}






//a character is in the alphabet or not


var c ="T";

if( ( c >= 'a' && c <= 'z') || ( c >= 'A' && c <= 'Z')){
    console.log("This character is in the alphabet")
}

else{
    console.log(" This character is not in the alphabet")

}





//checking weather that the temperature is hot, cold or normal


var Number = 25;

if( Number >= 30){
    console.log("The temperature is hot")
}
else if( Number <= 20){
    console.log("The temperature is cold")
}
else{
    console.log("The temperature is normal")

}


//Math, English and Physics find the total marks and average of 3 subjects


var Math = 40;
var Physics = 38;
var Chemistry = 40;


var addition = Math + Physics + Chemistry;
var average = addition / 3;



if( average >= 90){
    console.log("Grade A")
}
else if( average >= 80){
    console.log("Grade B")
}
else if( average >= 70){
    console.log("Grade C")
}
else if( average >= 60){
    console.log("Grade D")
}
else if( average >= 40){
    console.log("Grade E")
}
else{
    console.log("Grade F")

}
