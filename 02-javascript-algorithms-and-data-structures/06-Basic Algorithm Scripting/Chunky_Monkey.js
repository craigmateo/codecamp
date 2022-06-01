/* Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. */

function chunkArrayInGroups(arr, size) {
  // Break it up.
  newArr = [];
  //number of elements in new array:
  var num = Math.ceil(arr.length / size);
  
  for (i = 0; i < arr.length-size; i=i+size) {
  newArr.push(arr.slice(i,i+size));
  }
  
  //add remaining elements
  newArr.push([]);
  //number of elements added:
  var numAdded = (newArr.length -1) * size;
  //elements to add:
  var toAdd = arr.length - numAdded;
  //push last elements
  for (i = 1; i < toAdd+1; i=i+1) {
  newArr[newArr.length - 1].push(arr[arr.length-i]);
  }
  for (j = 0; j < newArr.length; j=j+1) {
  newArr[j].sort();
  }
  return newArr;
    
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
