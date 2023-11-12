/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let result;
  const r = Number(x.toString().split("").reverse().join(""));

  r == x ? (result = true) : (result = false);

  return result;
};
