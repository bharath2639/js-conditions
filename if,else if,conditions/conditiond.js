// if,else if and else if conditions

let num1 = 500;
let num2 = 900;

if(num1 > num2){
   console.log("the num1 is greater than num2");
} 
else if(num2>num1){
   console.log("the num2 is greater than num1");
}

else{
    console.log("the two number are equal");
}

// by using logical operator

let number1 = 5000;
let number2 = 50000;
let number3 = 5000;

if(number1>number2 || number1>number3){
    console.log("the number1 is greater");
}else if(number2>number1 || number2>number3){
    console.log("the number2 is greater");
}else if(number3>number1 || number3>number2){
    console.log("the number3 is greater");
}else {
    console.log("all are equal");
}


let n1 = 6000;
let n2 = 50000;
let n3 = 5000;

if(n1>n3 && n2>n3){
    console.log("the n1 and n2 are greater than n3");
}else if(n2>n1 && n3>n1){
    console.log("the n2 and n3 are greater than n1");
}else if(n1==n2 && n2 ==n3){
    console.log("all are equal");
}else{
    console.log("the two number are equal");
}


let marks = 65;

if(marks>=80){
    console.log("Grade A");
}else if(marks >= 79){
    console.log("Grade B");
}
else if(marks >= 65){
    console.log("Grade c");
}

let integer = 54;

if ( integer%2 == 0 ){ 
    
    console.log("Number is even");
}
else{
    console.log("Number is odd")
}




let voteAge = 17;

if(voteAge>=18){
    console.log("your are eligible");
}
else{
    console.log("your are not");
}
























