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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

let arr = [1, 1, 0, -1, -1];
console.log(plusMinus(arr));

function plusMinus(arr) {
  const size = arr.length;
  let postiveNmuInArr = 0;
  let negativeNmuInArr = 0;
  let zeroNmuInArr = 0;

  for (let i = 0; i < size; i++) {
    if (arr[i] > 0) {
      postiveNmuInArr += 1;
    } else if (arr[i] < 0) {
      negativeNmuInArr += 1;
    } else {
      zeroNmuInArr += 1;
    }
  }
  let postiveNmuInArrRatio = (postiveNmuInArr / size).toFixed(6);
  let negativeNmuInArrRatio = (negativeNmuInArr / size).toFixed(6);
  let zeroNmuInArrRatio = (zeroNmuInArr / size).toFixed(6);

  console.log(postiveNmuInArrRatio);
  console.log(negativeNmuInArrRatio);
  console.log(zeroNmuInArrRatio);

  return;
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
