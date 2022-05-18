/* The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
 */

function pairElement(str) {
  var n = str.split("");
  let k = [];
  for (let i=0;i<n.length;i++) {
    if (n[i]=='G') {
      k.push(['G','C']);
    }
    else if (n[i]=='C') {
      k.push(['C','G']);
    }
    else if (n[i]=='T') {
      k.push(['T','A']);
    }
    else if (n[i]=='A') {
      k.push(['A','T']);
    }
  }
  return k;
}

pairElement("GCCCCG");
