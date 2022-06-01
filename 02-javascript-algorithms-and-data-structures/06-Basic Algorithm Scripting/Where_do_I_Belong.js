/* Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1)

 */
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  
  arr.sort(function(a, b) {
  return a - b;
   });

  for (i=0; i<arr.length; i=i+1)
    if (num>arr[i] && num <=arr[i+1]) {
      index = i+1;
    } else if (num <=arr[0]) {
      index = 0;
    }
      else if (num >= arr[arr.length -1]) {
        index = arr.length;
    }
  
  return index;
  
}

getIndexToIns([5, 3, 20, 3], 5);
