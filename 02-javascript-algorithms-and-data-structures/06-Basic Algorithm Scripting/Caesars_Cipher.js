/* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

 */
function rot13(str) { // LBH QVQ VG!
    const x = [];
    const y = [];
    for (let i = 0; i < str.length; i = i + 1) {
        if (str.charCodeAt(i) > 77) {
            var newStr = str.charCodeAt(i) - 13;
            x.push(newStr);
        } else if (str.charCodeAt(i) <= 77 && str.charCodeAt(i) >= 65) {
            var newStr2 = 90 - (13 - (str.charCodeAt(i) - 65 + 1));
            x.push(newStr2);
        } else {
            var newStr3 = str.charCodeAt(i);
            x.push(newStr3);
        }
        var final = String.fromCharCode(x[i]);
        y.push(final);


    }
    var r = y.join("");
    r = r.split('-').join(' ');
    return r;
}

rot13("SERR PBQR PNZC");