/* Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5. */

function sumFibs(num) {
  var fibs = [1,1];
  while (fibs[fibs.length-1]<=num) {
    var fib = fibs[fibs.length-2]+fibs[fibs.length-1];
    fibs.push(fib);
  }
  if (fibs[fibs.length-1]>num) {
    fibs.pop();
  }
  for (i=0;i<fibs.length;i++) {
    if (fibs[i]%2===0) {
      fibs.splice(i, 1);
    }
  var sum = fibs.reduce(function(a, b) { return a + b; }, 0);

  }
  
  return sum;
}

sumFibs(1000);
