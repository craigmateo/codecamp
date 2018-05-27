/* Check if the predicate (second argument) is truthy on all elements of a collection (first argument). */


function truthCheck(collection, pre) {
  // Is everyone being true?
  var t = [];
  var f = [];
  for (i=0;i<collection.length;i++) {
  
  if (collection[i][pre]) {
    t.push("T");
  }
  else {
    f.push("F");
  }
  
  }
  if (f.length > 0) {
    return false;
  }
  else {
    return true;
  }
  
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");