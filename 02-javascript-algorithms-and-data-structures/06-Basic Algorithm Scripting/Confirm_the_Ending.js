/* Check if a string (first argument, str) ends with the given target string (second argument, target). */

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var targetLen = target.length;
  var split = str.split("");
  var slice = str.slice(str.length - target.length,str.length);
  if (slice == target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Open sesame", "same");
