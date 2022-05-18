/* Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

 */
function palindrome(str) {
  // Good luck!
  str = str.replace(/[\W_]+/g,"");
  str = str.toLowerCase();
  var res = str.split("");
  var rev = res.reverse();
  var newStr = rev.join("");
  if (str==newStr)
    return true;
  else {
    return false;
  }
}




palindrome("_*e ye  _ /_");
