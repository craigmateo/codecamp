/* Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
 */
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (bool===false || bool===true) {
    return true;
  }
  else {
    return false;
  }
}

booWho(null);
