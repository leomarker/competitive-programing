// function selfDividingNumbers(left: number, right: number): number[] {
//   let self_dividing = [];
//   for (left; left <= right; left++) {
//     if (isSelfDividing(left)) {
//       self_dividing.push(left);
//     }
//   }

//   return self_dividing;
// }

// function isSelfDividing(number: number): boolean {
//   const digits = number.toString().split("").map(Number);

//   for (let i = 0; i < digits.length; i++) {
//     if (number % digits[i] !== 0) {
//       return false;
//     }
//   }

//   return true;
// }

function selfDividingNumbers(left: number, right: number): number[] {
  let self_dividing = [];

  for (let i = left; i <= right; i++) {
    let isSelfDividing = 1;
    for (let digit of String(i)) {
      if (i % +digit !== 0) {
        isSelfDividing = 0;
      }
    }

    isSelfDividing && self_dividing.push(i);
  }

  return self_dividing;
}
