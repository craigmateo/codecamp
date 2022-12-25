/* Return true if the passed string is a valid US phone number.

The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555 */

function telephoneCheck(str) {
    // Good luck!
    var strip = str.replace(/[0-9]/g, '');
    var stripnew = strip.replace(/ /g, '');
    var num = stripnew.replace(/[^()-]/g, 'F');
    var n = num.indexOf("F");
    var number = str.replace(/[^0-9]/g, '');
    var l = number.length;
    var test1 = str.includes("(");
    var test2 = str.includes(")");

    if ((str.match(/-/g) || []).length > 2) {
      return false;
    }

    if (test1 || test2) {
        var count = stripnew.match(/[()]/g).length;
        if (count != 2) {
            return false;
        }
    }

    if (str.indexOf(')') > 6) {
        return false;
    }


    if (n != -1) {
        return false;
    } else if (l == 10) {
        return true;
    } else if (l == 11 && number[0] == 1) {
        return true;
    } else {
        return false;
    }

}


telephoneCheck("55 55-55-555-5");