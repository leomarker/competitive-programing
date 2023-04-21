"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(nums) {
  let maxSum = 0;
  let minSum = 0;
  for (let i = 0; i < nums.length; i++) {
    let slicedArrToSum = nums.filter((num) => num !== nums[i]);
    let sum = 0;
    for (let j = 0; j < slicedArrToSum.length; j++) {
      sum += slicedArrToSum[j];
    }

    if (sum >= maxSum) {
      maxSum = sum;
      if (minSum === 0) {
        minSum = sum;
      }
    } else if (sum > 0 && sum <= minSum) {
      minSum = sum;
    }
  }
  console.log(minSum, maxSum);
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
