function reverseString(str) {
  // type your code here
  return str.split('').reduce((r,c) => c + r, '') //reverse string using split() method
  
  //return str ? reverseStr(str.substr(1)) + str[0] : str //reverse string using substr() method
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
