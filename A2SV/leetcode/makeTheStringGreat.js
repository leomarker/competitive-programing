/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  let stack = [];

  for (let char of s) {
    if (stack.length > 0) {
      let lastChar = stack[stack.length - 1];

      if (
        (lastChar === char.toLowerCase() && char === char.toUpperCase()) ||
        (lastChar === char.toUpperCase() && char == char.toLowerCase())
      ) {
        stack.pop();
        continue;
      }
    }

    stack.push(char);
  }

  return stack.join("");
};
