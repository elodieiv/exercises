const DIGITS = ['0' , '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let str = '';
  do {
   let remainder = number % 10;
   number = Math.floor(number / 10);
   str = DIGITS[remainder] + str;
 } while (number > 0);
  return str;
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));      // "1234567890"
