#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform operation",
    type: "list",
    name: "opertor",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

//conditional statement

if (answer.opertor === "Addition") 
    {
    console.log(answer.firstNumber + answer.secondNumber);
} 
 else if (answer.opertor === "Subtraction")
     {
    console.log(answer.firstNumber - answer.secondNumber);
     }
else 
if (answer.opertor === "Multiplication")
     {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.opertor === "Division")
     {
    console.log(answer.firstNumber / answer.secondNumber);
} 
else {
    console.log("Please select valid operator");
    
}