//Checks if the number introduced have a valid US phone number format
function usaPhoneChecker(str) {
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}
//Example
usaPhoneChecker("555-555-5555");