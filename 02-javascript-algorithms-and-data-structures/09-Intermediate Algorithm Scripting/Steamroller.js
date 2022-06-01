/* Flatten a nested array. You must account for varying levels of nesting. */

function steamrollArray(ary) {
    var ret = [];
    for(var i = 0; i < ary.length; i++) {
        if(Array.isArray(ary[i])) {
            ret = ret.concat(steamrollArray(ary[i]));
        } else {
            ret.push(ary[i]);
        }
    }
    return ret;
}

steamrollArray([1, [2], [3, [[4]]]]);
