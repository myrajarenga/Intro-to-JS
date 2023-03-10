// Ask the user what month it is
const month = parseInt(prompt("What month is it? (0 is January, 6 is June, 12 is December etc)"));

// Can you use a switch statement to print which month it is?
switch (month){
  case 0:
    console.log("January");
    break;
  case 1:
    console.log("February");
    break;
  case 2:
    console.log("March");
    break;
  case 3:
    console.log("April");
    break;
  case 4:
    console.log("May");
    break;
  case 5:
    console.log("June");
    break;
  case 6:
    consle.log("July");
    break;
  case 7:
    console.log("August");
    break;
  case 8:
    console.log("September");
    break;
  case 9:
    console.log("October");
    break;
  case 10:
    console.log("November");
    break;
  case 11:
    console.log("December");
    break;
  default:
    console.log("Invalid month...");
}
// Ask the user how old they are
const age = parseInt(prompt("How old are you?"));
// Can you finish this if statement?
if (true) { 
  // if (age is greater than or equal to 18)
	console.log("You're an adult!");
} else if (true) { // else if (age is greater than 12)
	console.log("You're a teenager!");
} else {
	console.log("You're a child!");
}


















































































// Here's a hint if you're stuck:
// Remember the structure of a switch statement:
/*
switch (value) {
	case possibleValue:
		break;
	default:
		break;
}
*/