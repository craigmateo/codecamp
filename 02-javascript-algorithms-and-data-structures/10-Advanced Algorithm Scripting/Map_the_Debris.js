/* Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2. */


function orbitalPeriod(arr) {
  var earthRadius = 6367.4447;
  var GM = 398600.4418;
  
  var final = [];
  
  //for loop for each element
  for (i=0;i<arr.length;i++) {
  var values = Object.values(arr[i]);
  var keys = Object.keys(arr[i]);
  var alt = values[1];
  var vel = Math.sqrt(GM/(earthRadius+alt)); 
  var period = 2*3.14159265358979323846264338*((earthRadius+alt)/vel);
  period = Math.round(period);
  values[1]=period;
  keys[1]="orbitalPeriod";
  var result = {
    name: values[0], 
    orbitalPeriod: period
  };
  final.push(result);
  }
  
  return final;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
