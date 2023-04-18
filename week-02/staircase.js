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

console.log(staircase(4));

function staircase(n) {
  for (let i = 0; i < n.length; i++) {
    let space = n.length - 1;
    let hashtag = n.length - space;
    for (let space; space > 0; s--) {
      console.log(" ");
    }
    for (hashtag; hashtag > 0; hashtag--) {
      console.log("#");
    }
  }
}

// function main() {
//   const n = parseInt(readLine().trim(), 10);

//   staircase(n);
// }
