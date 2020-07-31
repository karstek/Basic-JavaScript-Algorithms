//Returns true if provided string is a palindrome. Removes all punctuation, spaces and symbols before comparison.
function palindrome(str) {
  let str2 = "";
  let regex = /[\W_]/g;

  str = str.replace(regex, "");
  str = str.toLowerCase();
  str2 = str.split("").reverse().join("");

  return str === str2;
}
//EXAMPLE
palindrome("hannah");