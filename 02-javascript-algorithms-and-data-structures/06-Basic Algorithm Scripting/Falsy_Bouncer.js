/* Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 */
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var filteredArray = arr.filter(Boolean);
  return filteredArray;
}

bouncer([7, "ate", "", false, 9, 0]);
