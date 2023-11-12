/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let length;
  let mergedWords = [];
  let result;
  word1.length <= word2.length
    ? (length = word1.length)
    : (length = word2.length);

  let arrWord1 = Array.from(word1.split(""));
  let arrWord2 = Array.from(word2.split(""));

  for (let i = 0; i < length; i++) {
    mergedWords.push(arrWord1.shift(), arrWord2.shift());
    result = mergedWords.join("");
  }

  if (arrWord1.length > 0) {
    result = result + arrWord1.join("");
  } else if (arrWord2.length > 0) {
    result = result + arrWord2.join("");
  }

  return result;
};
