/* Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string. */


function reverseString(str) {
  var res = str.split("");
  var rev = res.reverse("");
  var newStr = rev.join("");
  return newStr;
  
}

reverseString("hello");
