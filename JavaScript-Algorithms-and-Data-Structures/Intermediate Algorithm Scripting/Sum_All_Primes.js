/* Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
 */

function sumPrimes(num) {
  var nums = [];
  for (i=2;i<=num;i++) {
    nums.push(i);
  }
  var sieve = [], i, j, primes = [];
  function getPrimes(n) {
    for (i = 2; i <= n; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= n; j += i) {
                sieve[j] = true;
            }
        }
    }
  }
    getPrimes(num);
    var sum = primes.reduce(function(a, b) { return a + b; }, 0);
    return sum;

}
sumPrimes(10);
