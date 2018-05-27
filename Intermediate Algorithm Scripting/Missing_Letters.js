/* Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. */

function fearNotLetter(str) {
  var start = str.charCodeAt(0);
  var end = str.charCodeAt(str.length-1);
  var add = [];
  var real = [];
  for (i=0;i<str.length;i++) {
    var k = str.charCodeAt(i);
    add.push(k);
    }
  for (j=0;j<add.length+1;j++) {
    var n = start + j;
    real.push(n);
        }
  for (p=0;p<add.length+1;p++) {
    if (add[p] != real[p]) { break; }
      char = real[p]+1;
    }
  var rip = String.fromCharCode(char);
  if (char >= end) {
    return undefined;
  }
  else {
    return rip;
  }
}


fearNotLetter("bcd");
