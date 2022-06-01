/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

 */
function mutation(arr) {
  //all to lower case:
  for (i=0; i<arr.length; i=i+1) {
  arr[i] = arr[i].toLowerCase();
  //split strings
  arr[i] = arr[i].split("");
    }
  truthTable = [];
  for (i=0; i<arr[1].length; i=i+1) {
    var value = arr[0].indexOf(arr[1][i]);
    truthTable.push(value);
  }
    var final = truthTable.indexOf(-1);
  if (final != -1) {
    return false;
  }
    else {
      return true;
    }  
}

mutation(["Hello", "hey"]);
