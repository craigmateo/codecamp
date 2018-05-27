/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
 */

function destroyer(arr,x,y,z) {
  // Remove all the values
  function isNotValues(value) {
  return value !== x && value !== y && value !== z;
}
  var filtered = arr.filter(isNotValues);
  return filtered;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
