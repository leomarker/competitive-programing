/**
 * @param {number} celsius
 * @1,2,3,4return {number[]}
 */
var convertTemperature = function (celsius) {
  return [(celsius + 273.15).toFixed(5), (celsius * 1.8 + 32.0).toFixed(5)];
};
