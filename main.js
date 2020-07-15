// sanity check
console.log("files are linked");

// question one
// create name variable
let myName = "Autumn";
// create a message variable 
let message = "My name is: "
// print message and name
console.log(message + myName);

// question two
// ask user for balance
let userBalance = prompt("What is your balance");
// subtract 10 from user balance
// let newBalance = userBalance - 10;
userBalance = userBalance - 10;
// print new balance
console.log("You lost $10. Your new balance is: " + userBalance);

// question three
// ask user for grade
let grade = prompt("Enter your grade");
// ask user for extra credit
let extraCredit = prompt("Enter your extra credit");
// add grade and extra credit
let finalGrade = parseInt(grade) + parseInt(extraCredit);
// print final grade
console.log("Final Grade: " + finalGrade);

// question four
// ask for balance
let balance = parseInt(prompt("What is your current balance"));
// ask for deduction amount
let deduction = parseInt(prompt("How much would you like to deduct"));
// subtract balance and deduction
// let newBalance = balance - deduction;
// print new balance
console.log("Your new balance is: " + (balance - deduction));

// parse int example
let numOne = "10";
let numTwo = "20";
console.log(parseInt(numOne) + parseInt(numTwo));