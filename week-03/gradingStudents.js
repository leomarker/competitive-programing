"use strict";

const fs = require("fs");

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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */
const grades = [73, 67, 38, 33];
gradingStudents(grades);
function gradingStudents(grades) {
  // Write your code here
  let roundedGrades = [];
  for (let i = 0; i < grades.length; i++) {
    let round = Math.ceil(grades[i] / 5);

    let nextMultipleOfFive = 5 * round;

    let differenceBetweenMultipleAndGrade = nextMultipleOfFive - grades[i];

    if (grades[i] < 38 || differenceBetweenMultipleAndGrade >= 3) {
      roundedGrades[i] = grades[i];
    } else {
      roundedGrades[i] = nextMultipleOfFive;
    }
  }
  return roundedGrades;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const gradesCount = parseInt(readLine().trim(), 10);

  let grades = [];

  for (let i = 0; i < gradesCount; i++) {
    const gradesItem = parseInt(readLine().trim(), 10);
    grades.push(gradesItem);
  }

  const result = gradingStudents(grades);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
