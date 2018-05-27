/* We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first. */

function sumAll(arr) {
  
  var total = 0;
  if (arr[0]<=arr[1]) {
    for(var i = arr[0]; i <= arr[1]; i++){
      total += i;
    }
  }
  else {
    for(var m = arr[1]; m <= arr[0]; m++){
      total += m;
  }
  }
    return total;
   
}

sumAll([1, 4]);
