/* Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

 */
function permAlone(str) {
  var strNew = str.split("");
  var numPer = 1;
  //number of permutions
  for (i=0;i<strNew.length;i++) {
    numPer = numPer*(strNew.length-i);
  }
  //array of permutations
  var permArr = [],
  usedChars = [];
  
  function permute(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length === 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
}
  permute(strNew);
  
  for (i=0;i<permArr.length;i++) {
    permArr[i]=permArr[i].join("");

  }
  for (i=0;i<permArr.length;i++) {
  permArr[i]=permArr[i].replace(/[^\w\s]|(.)\1/gi, "");
  }
  count = 0;
  //count number of non repeat arrays
  for (i=0;i<permArr.length;i++) {
    if (permArr[i].length==strNew.length) {
      count=count+1;
    }
  }
  return count;
}

permAlone('abb');
