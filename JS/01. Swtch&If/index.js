// Q1: Write a program that allow to user enter number then print it
/*
var number = window.prompt("Enter a number ....");
console.log(number);
*/

// Q2: Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
/*
var number = window.prompt("Enter a number ....");
if(Number(number)%3 == 0 && Number(number)%4 == 0){
    console.log("Yes...");
}else{
    console.log("No...");
}
*/

//Q3: Write a program that allows the user to insert 2 integers then print the max
/*
var number1 = window.prompt("Enter a number 1 ....");
var number2 = window.prompt("Enter a number 2 ....");
Number(number1) > Number(number2)? console.log(number1): console.log(number2);
*/

//Q4: Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
/*
var number = window.prompt("Enter a number ....");
if (Number(number) > 0) {
    console.log("Positive ....");
} else if (Number(number) < 0) {
    console.log("Negative ....");
}
*/

//Q5: Write a program that take 3 integers from user then print the max element and the min element.
/*
var number1 = window.prompt("Enter a number 1 ....");
var number2 = window.prompt("Enter a number 2 ....");
var number3 = window.prompt("Enter a number 3 ....");

if (Number(number1) >= Number(number2) && Number(number1) >= Number(number3)) {
    console.log("Max number is: ", number1);
    if (Number(number2) > Number(number3)) {
        console.log("Min number is: ", number3);
    } else {
        console.log("Min number is: ", number2);
    }
} else if (Number(number2) >= Number(number1) && Number(number2) >= Number(number3)) {
    console.log("Max number is: ", number2);
    if (Number(number1) > Number(number3)) {
        console.log("Min number is: ", number3);
    } else {
        console.log("Min number is: ", number1);
    }
} else {
    console.log("Max number is: ", number3);
    if (Number(number1) > Number(number2)) {
        console.log("Min number is: ", number2);
    } else {
        console.log("Min number is: ", number1);
    }
}
*/

// Q6: Write a program that allows the user to insert integer number then check If a number is oven or odd
/*
var number = window.prompt("Enter a number ....");
if(Number(number)%2){
    console.log("Odd Number...");
}else{
    console.log("Even Number...");
}
*/

// Q7: Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
/*
var char = window.prompt("Enter a Char ....");
if (
    char == 'a' || char == 'A' ||
    char == 'e' || char == 'E' ||
    char == 'u' || char == 'U' ||
    char == 'o' || char == 'O' ||
    char == 'i' || char == 'I') {
    console.log("Vowel Character :)");
} else {
    console.log("Not Vowel Character :(");
}
*/

// Q8: Write a program that allows user to insert integer then print all numbers between 1 to that’s number
/*
var number = window.prompt("Enter a number ....");
for(var i = 1 ; i <= Number(number) ; ++i){
    console.log(i);
}
*/

// Q9: Write a program that allows user to insert integer then print a multiplication table up to 12.
/*
var number = window.prompt("Enter a number ....");
for(var i = 1 ; i <= 12 ; ++i){
    console.log(Number(number) * i);
}
    */

// Q10: Write a program that take two integers then print the power
/*
var number = window.prompt("Enter a number ....");
for(var i = 2 ; i <= Number(number) ; i+=2){
    console.log(i);
}
*/

// Q11: Write a program to enter marks of five subjects and calculate total, average and percentage.
/*
var number1 = window.prompt("Enter a number 1 ....");
var number2 = window.prompt("Enter a number 2 ....");
var result = 1;
for(var i = 1 ; i <= number2 ; ++i){
    result *= number1;
}
console.log(result);
*/

// Q12: Write a program to input month number and print number of days in that month.
/*
var total = 0;
for(var i = 1 ; i <= 5 ; ++i){
    var mark = window.prompt("Enter a Mark ...");
    total += Number(mark);
}
console.log("Total Marks = ", total);
console.log("Average Marks = ", total / 5);
console.log("Percentage: ", total / 5 , "%");
*/

// Q13: Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade
/*
var number = window.prompt("Enter a number ....");
if(number == 1 || number == 3 || number == 5 || number == 7 || number == 8 || number == 10 || number == 12){
    console.log("Days in Month: 31");
}else if(number == 4 || number == 6 || number == 9 || number ==11 ){
    console.log("Days in Month: 30");
}else if(number == 2 ){
    console.log("Days in Month: 28");
}
*/

// Using Switch

// Q14: Write a program to print total number of days in month
/*
var total = 0;
for (var i = 1; i <= 5; ++i) {
    var mark = window.prompt("Enter a Mark ...");
    total += Number(mark);
}
var percentage = total / 5;
if (percentage >= 90) {
    console.log("Percentage = ", percentage);
    console.log("Grade is: A" );
} else if (percentage >= 80) {
    console.log("Percentage = ", percentage);
    console.log("Grade is: B" );
} else if (percentage >= 70) {
    console.log("Percentage = ", percentage);
    console.log("Grade is: C" );
} else if (percentage >= 60) {
    console.log("Percentage = ", percentage);
    console.log("Grade is: D" );
}else if (percentage >= 40) {
    console.log("Percentage = ", percentage);
    console.log("Grade is: E" );
}else{
    console.log("Percentage = ", percentage);
    console.log("Grade is: F" );
}
    */

//Q15: Write a program to check whether an alphabet is vowel or consonant
/*
var number = window.prompt("Enter a number ....");
switch (+number) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: {
        console.log("Days in Month: 31");
        break;
    }
    case 4:
    case 6:
    case 9:
    case 11: {
        console.log("Days in Month: 30");
        break;
    }
    case 2: {
        console.log("Days in Month: 28");
        break;
    }
}
*/

// Q16: Write a program to find maximum between two numbers
/*
var char = window.prompt("Enter a Char ....");
switch (char) {
    case 'a':
    case 'A':
    case 'e':
    case 'E':
    case 'u':
    case 'U':
    case 'o':
    case 'O':
    case 'i':
    case 'I':
        console.log("Vowel Character :)");
        break;
    default:
        console.log("Consonant Character :(");
}
*/

// Q17: Write a program to check whether a number is even or odd
/*
var number1 = window.prompt("Enter a number 1 ....");
var number2 = window.prompt("Enter a number 2 ....");
switch(number1 > number2){
    case true: {
        console.log("Max is: ", number1);
        break;
    }
    default:{
        console.log("Max is: ", number2);
    }
}
*/

//Q18: Write a program to check whether a number is positive or negative or zero
/*
var number = window.prompt("Enter a number ....");
switch (number % 2 == 0) {
    case true: {
        console.log("Number is Even ....");
        break;
    }
    default: {
        console.log("Number is Odd ..");
    }
}
*/

//Q19: Write a program to create Simple Calculator
/*
var number = window.prompt("Enter a number ....");
switch (true) {
    case number > 0: {
        console.log("Number is Positive ....");
        break;
    }
    case number < 0: {
        console.log("Number is Negative ....");
        break;
    }
    case number == 0: {
        console.log("Number is Zero ..");
        break;
    }
}
*/

//Q20: Write a program to create Simple Calculator
/*
var number1 = window.prompt("Enter a number 1 ....");
var operator = window.prompt("Enter the Operator ...");
var number2 = window.prompt("Enter a number 2 ....");
switch (operator) {
    case '+': {
        console.log(+number1 + +number2);
        break;
    }
    case '-': {
        console.log(number1 - number2);
        break;
    }
    case '*': {
        console.log(number1 * number2);
        break;
    }
    case '/': {
        console.log(number1 / number2);
        break;
    }
}
    */

