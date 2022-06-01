/* Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase. */


function translatePigLatin(str) {
  var a = str.split("");
  if (a[0]=='a' || a[0]=='e' || a[0]=='i' || a[0]=='o' || a[0]=='u') {
    var b = a.push('way');
    
  }
  else if (a[1]=='a' || a[1]=='e' || a[1]=='i' || a[1]=='o' || a[1]=='u') {
    var d = a.push(a[0]+"ay");
    a.splice(0,1);
  }
  else {
    var e = a.push(a[0]+a[1]+"ay");
    a.splice(0,2);
  }
  var c = a.join("");
  return c;
}

translatePigLatin("glove");
