/* Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case. */

function convertToRoman(num) {
  var digits = (""+num).split("");
  var firstRoman = [];
  first = digits[digits.length - 1];
 
  
  function oneDigit(first) { 
  if (first<4) {
    var a = "I".repeat(first);
    firstRoman.push(a);
  }
  else if (first==4) {
    var b = "IV";
    firstRoman.push(b);
  }  
  else if (first==5) {
    var c = "V";
    firstRoman.push(c);
  }
  else if (first>5 && first<9) {
     var d = "I".repeat(first-5);
     firstRoman.push("V"+d);
  }
  else if (first==9) {
    var e = "IX";
    firstRoman.push(e); 
  }
  } 
  
  second = digits[digits.length - 2];
  function twoDigit(second) {
     if (second<4) {
    var a = "X".repeat(second);
    firstRoman.push(a);
  }
  else if (second==4) {
    var b = "XL";
    firstRoman.push(b);
  }  
  else if (second==5) {
    var c = "L";
    firstRoman.push(c);
  }
  else if (second>5 && second<9) {
     var d = "X".repeat(second-5);
     firstRoman.push("L"+d);
  }
  else if (second==9) {
    var e = "XC";
    firstRoman.push(e); 
  }
  }
   third = digits[digits.length - 3];
  function threeDigit(third) {
     if (third<4) {
    var a = "C".repeat(third);
    firstRoman.push(a);
  }
  else if (third==4) {
    var b = "CD";
    firstRoman.push(b);
  }  
  else if (third==5) {
    var c = "D";
    firstRoman.push(c);
  }
  else if (third==6) {
     var d = "DC";
     firstRoman.push(d);
  }  
  else if (third>6 && third<9) {
     var e = "C".repeat(third-5);
     firstRoman.push("D"+e);
  }
  else if (third==9) {
    var f = "CM";
    firstRoman.push(f); 
  }
  }
  fourth = digits[digits.length - 4];
  function fourDigit(fourth) {
    var a = "M".repeat(fourth);
    firstRoman.push(a);
  }
  oneDigit(first);
  twoDigit(second);
  threeDigit(third);
  fourDigit(fourth);
  var final = firstRoman.reverse();
  var roman = final.join("");
  
  return roman;
   
}


convertToRoman(798);
