/**
 * @param {number} n
 * @return {number}
 */

var countPrimes = function (n) {
  let primeNums = 0;

  let primes = Array(n).fill(true);
  primes[0] = primes[1] = false;

  for (let p = 2; p * p <= n; p++) {
    if (primes[p] == true) {
      for (let i = p * p; i <= n; i += p) {
        primes[i] = false;
      }
    }
  }

  for (i = 2; i <= n; i++) {
    if (primes[i] == true) primeNums++;
  }
  return primeNums;
};

console.log(countPrimes(2));
