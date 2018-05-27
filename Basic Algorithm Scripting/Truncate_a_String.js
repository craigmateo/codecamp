/* Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending. */

function truncateString(str, num) {
  // Clear out that junk in your trunk
  var a = str.split(" ");    
  var aLen = a[0].length;
  if (num >= str.length) {
    return str;
  } else if (aLen > num) {
    return a[0].slice(0,num)+"...";
  } else {
    return str.slice(0,num-3)+ "..."; 
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 16);
