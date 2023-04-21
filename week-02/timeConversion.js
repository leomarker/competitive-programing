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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
let twelveHourFormat = "12:40:22AM";
timeConversion(twelveHourFormat);
function timeConversion(twelveHourFormat) {
  const [hours, minutes, secondModifier] = twelveHourFormat.split(":");
  const second = secondModifier.substring(0, 2);
  const modifier = secondModifier.substring(2, 4);

  let hours24;
  if (modifier === "AM") {
    if (hours === "12") {
      hours24 = "00";
    } else {
      hours24 = hours;
    }
  }

  if (modifier === "PM" && hours === "12") {
    hours24 = "12";
  } else if (modifier === "PM") {
    hours24 = parseInt(hours, 10) + 12;
  }

  console.log(`${hours24}:${minutes}:${second}`);
  return `${hours24}:${minutes}:${second}`;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
