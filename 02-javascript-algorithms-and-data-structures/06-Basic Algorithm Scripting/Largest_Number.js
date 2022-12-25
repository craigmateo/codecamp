/* Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays. */

function largestOfFour(arr) {
  // You can do this!
  var maxNum = [];
  for (let i = 0; i < 4; i++){
  var max = arr[i].sort(function(a,b){return b-a;})[0];
  maxNum.push(max);
  }
  return maxNum;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
