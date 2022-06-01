/* Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array. */


function dropElements(arr, func) {
  // Drop them elements.
  var num = 0;
  var filtered = arr.filter(func);
  var k = filtered[0];
  var n = arr.indexOf(k);
  if (n!=-1) {
  return arr.slice(n,arr.length);
  }
  else {
    return [];
  }
 
}


dropElements([1, 2, 3, 4], function(n) {return n > 5;});
