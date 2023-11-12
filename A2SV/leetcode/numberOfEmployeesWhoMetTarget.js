/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function (hours, target) {
  let result = 0;

  for (let hour of hours) {
    hour >= target ? result++ : result;
  }

  return result;
};
