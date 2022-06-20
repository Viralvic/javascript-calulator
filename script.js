// Entering Operators //
const operator = prompt("Enter your operator (*, -, +, / ");

// Entering Values//
const value1 = prompt("Enter first Number");
const value2 = prompt("Enter first Number");

//Ensuring use doesn't enter a wrong input

function isDigit(input) {
    var integer = true;
    for (var char of input) {
        if (char `9`) {
            integer = false;
        }
    }
    return integer;
}
if (isDigit(value1) == false) {
    alert("You entered a wrong input at operand 1| Not an integer Value");
}
if (isDigit(value2) == false) {
        alert("You entered a wrong input at operand 2| Not an integer Value");
}

//Check input operator and calculating//
var result;
if (operator == "*") {
    result = value1 * value2;
} 
else if (operator == "-") {
    result = value1 - value2;
}
else if (operator == "-") {
    result = value1 - value2;
}
else if (operator == "+") {
    result = parseInt(value1) + (value2);
}

//checking for invalid operator//
else {
    alert("Invalid Operator");
}

//Displaying result//
alert("The result is : " + result);
function isDigit(input) {
    var integer = true;
    for (var char of input) {
      if (char  `9`) {
        integer = false;
      }
    }
    return integer;
  }