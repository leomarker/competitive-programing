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
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let totalDistanceFromTheAppleTree = [];
  let totalDistanceFromTheOrangeTree = [];
  let applesThatFallOnHouse = 0;
  let orangesThatFallOnHouse = 0;

  for (let i = 0; i < apples.length; i++) {
    totalDistanceFromTheAppleTree[i] = apples[i] + a;
  }
  for (let i = 0; i < oranges.length; i++) {
    totalDistanceFromTheOrangeTree[i] = oranges[i] + b;
  }

  for (let i = 0; i < totalDistanceFromTheAppleTree.length; i++) {
    if (
      totalDistanceFromTheAppleTree[i] >= s &&
      totalDistanceFromTheAppleTree[i] <= t
    ) {
      applesThatFallOnHouse += 1;
    }
  }
  for (let i = 0; i < totalDistanceFromTheOrangeTree.length; i++) {
    if (
      totalDistanceFromTheOrangeTree[i] >= s &&
      totalDistanceFromTheOrangeTree[i] <= t
    ) {
      orangesThatFallOnHouse += 1;
    }
  }

  console.log(applesThatFallOnHouse, orangesThatFallOnHouse);
}

function main() {
  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const s = parseInt(firstMultipleInput[0], 10);

  const t = parseInt(firstMultipleInput[1], 10);

  const secondMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const a = parseInt(secondMultipleInput[0], 10);

  const b = parseInt(secondMultipleInput[1], 10);

  const thirdMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const m = parseInt(thirdMultipleInput[0], 10);

  const n = parseInt(thirdMultipleInput[1], 10);

  const apples = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((applesTemp) => parseInt(applesTemp, 10));

  const oranges = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((orangesTemp) => parseInt(orangesTemp, 10));

  countApplesAndOranges(s, t, a, b, apples, oranges);
}
