function selfDividingNumbers(left: number, right: number): number[] {
  let self_dividing = [];
  for (left; left <= right; left++) {
    if (isSelfDividing(left)) {
      self_dividing.push(left);
    }
  }

  return self_dividing;
}

function isSelfDividing(number: number): boolean {
  const digits = number.toString().split("").map(Number);

  for (let i = 0; i < digits.length; i++) {
    if (number % digits[i] !== 0) {
      return false;
    }
  }

  return true;
}
