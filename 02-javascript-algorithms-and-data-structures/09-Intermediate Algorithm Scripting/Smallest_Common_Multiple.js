/* Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3. */


function smallestCommons(arr) {
  if (arr[0] > arr[1]) {
    arr=[arr[1],arr[0]];
  }
  
  var min = arr[0];
  var max = arr[1];
  function range(min, max) {
     var arr = [];
     for (var i = min; i <= max; i++) {
       arr.push(i);
        }
       return arr;
    }

    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);   
    }

    var multiple = min;
    range(min, max).forEach(function(n) {
        multiple = lcm(multiple, n);
    });

    return multiple;
}


smallestCommons([5,1]);
