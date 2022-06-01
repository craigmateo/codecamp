/* Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number. */

function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num > 0) {
  var strRepeat = str.repeat(num);
  return strRepeat;
  }
  else {
    return "";
  }
}

repeatStringNumTimes("abc", 3);
