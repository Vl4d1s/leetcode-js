/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  let reversedNumber = x.toString().split("").reverse().join("");
  return x.toString() === reversedNumber;
};
