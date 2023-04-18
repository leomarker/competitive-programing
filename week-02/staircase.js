// "use strict";

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", function (inputStdin) {
//   inputString += inputStdin;
// });

// process.stdin.on("end", function () {
//   inputString = inputString.split("\n");

//   main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

staircase(10);

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let space = n - i;
    let hashtag = n - space;
    let string = "";
    for (space; space > 0; space--) {
      string = string + " ";
    }
    for (hashtag; hashtag > 0; hashtag--) {
      string = string + "#";
    }
    console.log(string);
  }
}

// function main() {
//   const n = parseInt(readLine().trim(), 10);

//   staircase(n);
// }
