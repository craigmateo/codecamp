/* Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after). */


function myReplace(str, before, after) {
  var res = str.split(" ");
  var n = res.indexOf(before);
  var bef = before.split("");
  var aft = after.split("");
  if(bef[0].toUpperCase() == bef[0]) {
    aft[0] = aft[0].toUpperCase();
  }
  var afterNew = aft.join('');
  var newstr = str.replace(before, afterNew);
  return newstr;
  
}

myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped");
