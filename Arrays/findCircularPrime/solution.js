const isPrime = (num) => {
  for(let i = 2; Math.pow(i,2) <= num; i++) {
    if(num % i === 0){
      return false;
    }
  }

  return true;
}
const findPrimes = (range) => {
  const primes = [];
  for(let i = 2; i <= range; i++) {
    if(isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

const isCircularPrime = (prime) => {
  let primeString = prime.toString();
  const numOfRotations = primeString.length - 1;
  for(let i = 1; i <= numOfRotations; i++) {
    primeString = primeString.charAt(numOfRotations) + primeString.substring(0, numOfRotations);
    const num = parseInt(primeString);
    if(!isPrime(num))
      return false;
  }
  return true;
}

const findCircularPrimes = (range) => {
  const primes = findPrimes(range);
  const circularPrimes = primes.filter(prime => isCircularPrime(prime));
  console.log(circularPrimes);
  return circularPrimes.length;
}
