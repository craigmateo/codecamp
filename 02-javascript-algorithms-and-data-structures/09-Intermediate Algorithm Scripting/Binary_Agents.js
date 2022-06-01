/* Return an English translated sentence of the passed binary string.

The binary string will be space separated. */

function binaryAgent(str) {
  
  var res = str.split(" ");
  //var a = str.charCodeAt(1); 
  var chars = [];
  var baseTen = [];
  //convert a base 2 number (x) to base 10
  
  for (j=0;j<res.length;j++) { 
  var arr = [];
  var dec = res[j].split("");
  for (i=0;i<dec.length;i++) {
    arr.push(dec[i]*Math.pow(2,dec.length-1-i));
  }
  var sum = arr.reduce(function (a, b) {return a + b;}, 0);
  baseTen.push(sum);
  
  chars.push(String.fromCharCode(baseTen[j]));
 
  }
  var result = chars.join("");
  return result;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
