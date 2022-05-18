/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  s = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  var res = s.toLowerCase();
  var newstr = res.replace(/ |_/gi, '-');
  return newstr;
}

spinalCase('The_Andy_Griffith_Show');
