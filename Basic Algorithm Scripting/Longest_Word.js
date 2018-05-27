/* Return the length of the longest word in the provided sentence. */

function findLongestWord(str) {
  var res = str.split(" ");
  var x = res.map( function(item) { return item.length; } );
  var largest = Math.max.apply(Math, x);
  return largest;
  //return str.length;
}

findLongestWord("The restaurant that is located on tenth street");
