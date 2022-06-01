/* Return the provided string with the first letter of each word capitalized. */

function titleCase(str) {  
  str = str.toLowerCase().split(' ');

  for(var i = 0; i < str.length; i++){
    str[i] = str[i].split('');
    str[i][0] = str[i][0].toUpperCase(); 
    str[i] = str[i].join('');
  }
  return str.join(' ');
}
titleCase("I'm a little tea pot");
    