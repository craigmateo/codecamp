function checkCashRegister(price, cash, cid) {

  var change = [];
  var obj = {};
  var status = "";
  var diff = (cash-price).toFixed(2); // e.g 0.60
  var money = [0.01,0.05,0.10,0.25,1.00,5.00,10.00,20.00,100.00];
  //create array with demoninations that are less than or equal to change needed
  var neededChange = []; // e.g. [0.01,0.05,0.10,0.25]
  for (let i=0;i<money.length;i++) {
    if (money[i]<=diff) {
      neededChange.push(money[i]);
    }
  }
  
  //Loop through change available and substract until right amount is obtained
  var available = []; //e.g. [1.01,2.05,3.1,4.25]
  for (let j=0;j<neededChange.length;j++) {
    available.push(cid[j][1]);
  }
 
  //Return insuff funds if not enough cash in drawer; closed if it equals change due
  var sum = available.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }

  if (sum<diff) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  }
  if (sum == diff) {
    status = "CLOSED";
  }
  
  //array for how many of each denomination
  var howMany = []; //e.g. [101,41,31,17]
  for (let k=0;k<available.length;k++) {
    howMany.push(Math.round(available[k]/money[k]));
  } 
  //amount in each denomination pushed to the array "change"
  for (let i=1;i<neededChange.length+1;i++) {
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
  for (let j=0;j<neededChange.length;j++) {
    names.push(cid[j][0]);
  }
  //create final array with name and amount e.g. ["QUARTER", 0.50]
  var sumFinal = 0;
  var final = [];
  for (let p=0;p<names.length;p++) {
    if (change[p]!==0) {
      sumFinal+=change[p];
      final.push([names[p],change[p]]);   
   }
  }

  // cash in drawer
  var cashRemaining = 0;
  for (let c=0;c<cid.length;c++) {
    cashRemaining += cid[c][1];
  }

  if (status == "INSUFFICIENT_FUNDS") {
    obj.status = status;
    obj.change = [];
  }

  else if (status != "CLOSED") {
    status = "OPEN";
    obj.status = status;
    obj.change = final.reverse();
  }

  else {
    obj.status = status;
    obj.change = cid;
  }

  console.log(obj);
  
  return obj;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
