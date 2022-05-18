/* Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

 */
function checkCashRegister(price, cash, cid) {
  var change = [];
  var diff = (cash-price).toFixed(2); // e.g 0.60
  var money = [0.01,0.05,0.10,0.25,1.00,5.00,10.00,20.00,100.00];
  //create array with demoninations that are less than or equal to change needed
  var neededChange = []; // e.g. [0.01,0.05,0.10,0.25]
  for (i=0;i<money.length;i++) {
    if (money[i]<=diff) {
      neededChange.push(money[i]);
    }
  }
  //Loop through change available and substract until right amount is obtained
  var available = []; //e.g. [1.01,2.05,3.1,4.25]
  for (j=0;j<neededChange.length;j++) {
    available.push(cid[j][1]);
  }
  
  //Return insuff funds if not enough cash in drawer; closed if it equals change due
  var sum = available.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  if (sum<diff) {
    return "Insufficient Funds";
  }
  if (sum==diff) {
    return "Closed";
  }
  //array for how many of each denomination
  var howMany = []; //e.g. [101,41,31,17]
  for (k=0;k<available.length;k++) {
    howMany.push(Math.round(available[k]/money[k]));
  } 
  //amount in each denomination pushed to the array "change"
  for (i=1;i<neededChange.length+1;i++) {
    if (diff<=available[neededChange.length-i]) {
  var alpha = Math.floor(diff/(neededChange[neededChange.length-i]));
  change.push(alpha*neededChange[neededChange.length-i]);
  diff = (diff-change[i-1]).toFixed(2);
  }
    else {
  change.push(howMany[howMany.length-i]*(neededChange[neededChange.length-i]));
  diff = (diff-change[i-1]).toFixed(2);
    }

  }
  //create array of denomination names
  change = change.reverse();
  var names = [];
  for (j=0;j<neededChange.length;j++) {
    names.push(cid[j][0]);
  }
  //create final array with name and amount e.g. ["QUARTER", 0.50]
  var final = [];
  for (p=0;p<names.length;p++) {
    if (change[p]!==0) {
  final.push([names[p],change[p]]);   
   }
  }


  return final.reverse();
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
