/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. */


function convertHTML(str) {
  // &colon;&rpar;
  var arr = str.split("");
  
  
  var indices = [];
  var array = arr;
  var element = '&';
  var idx = array.indexOf(element);
    while (idx != -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
  }
  for (i=0;i<indices.length;i++) {
    arr.splice(indices[i],1,'&amp;');
  }
 
      
  var indicesOne = [];
  var elementOne = '<';
  var idxOne = array.indexOf(elementOne);
    while (idxOne != -1) {
    indicesOne.push(idxOne);
    idxOne = array.indexOf(elementOne, idxOne + 1);
  }
  for (i=0;i<indicesOne.length;i++) {
    arr.splice(indicesOne[i],1,'&lt;');
  }     
  
  
   var indicesTwo = [];
   var elementTwo = '>';
   var idxTwo = array.indexOf(elementTwo);
    while (idxTwo != -1) {
    indicesTwo.push(idxTwo);
    idxTwo = array.indexOf(elementTwo, idxTwo + 1);
  }
  for (i=0;i<indicesTwo.length;i++) {
    arr.splice(indicesTwo[i],1,'&gt;');
  } 
  
  
   var indicesThree = [];
   var elementThree = '"';
   var idxThree = array.indexOf(elementThree);
    while (idxThree != -1) {
    indicesThree.push(idxThree);
    idxThree = array.indexOf(elementThree, idxThree + 1);
  }
  for (i=0;i<indicesThree.length;i++) {
    arr.splice(indicesThree[i],1,'&quot;');
  } 
  
   var indicesFour = [];
   var elementFour = "'";
   var idxFour = array.indexOf(elementFour);
    while (idxFour != -1) {
    indicesFour.push(idxFour);
    idxFour = array.indexOf(elementFour, idxFour + 1);
  }
  for (i=0;i<indicesFour.length;i++) {
    arr.splice(indicesFour[i],1,'&apos;');
  } 
 
  var bingo = arr.join("");
  
  return bingo;
}

convertHTML("Hamburgers < Pizza < Tacos");
