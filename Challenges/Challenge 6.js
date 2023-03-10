// Write a function called printPyramid that prints
// a pyramid out of an input character, of an input
// height (input received in that order). The
// function should only log to the console once
// (that means you shouldn't print inside of loops,
// you can still use loops, but you should generate
// the pyramid as one string, and then print that
// one string). (Remember that '\n' is the new line
// character.)

// For example, if the input character is "#" and
// the input height is 4, the output should be:
/*
   #
  ###
 #####
#######
*/
function printPyramind(char , height){ 
  for (let i = 1; i <= height; height++){
    let spaces = ' '.repeat(height - i);
    let blocks = char.repeat(2*i - 1);
  }
  console.log(spaces + blocks + spaces);
}

printPyramind('#', 4)
  
