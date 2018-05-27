/* Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item
 */
 
function updateInventory(arr1, arr2) {
    //All inventory must be accounted for or you're fired!
    var newArr1 = [];
    
    //add numbers of common items; push to newArr1
    for (i=0;i<arr1.length;i++) {
      for (j=0;j<arr2.length;j++){
        if (arr1[i][1]==arr2[j][1]) {
          var val = arr1[i][0]+arr2[j][0];
          newArr1.push([val,arr1[i][1]]);
          //remove pushed arrays from original array
          arr1.splice(i,1);
          arr2.splice(j,1);
        }
      }
    }
  
    //push remaining items to the new array 
    
    for (i=0;i<arr1.length;i++) {
      newArr1.push(arr1[i]);
    }
    for (i=0;i<arr2.length;i++) {
      newArr1.push(arr2[i]);
    }
  
    //put new array in alphabetical order
    newArr1.sort(function(a, b) { 
    return a[1] > b[1] ? 1 : -1;
  });
  
    return newArr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
