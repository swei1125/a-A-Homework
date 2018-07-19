
function madLib(v, adj, n) {
  return `we shall ${v.toUpperCase()} the ${adj.toUpperCase()} ${n.toUpperCase()}.`
}
// console.log(madLib('make', 'best', 'guac'))

function isSubstring(searchString, subString) {
  return searchString.includes(subString);
}

// console.log(isSubstring("time to program", "time"))

function fizzBuzz(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] % 3 === 0)&&(arr[i] % 5 === 0)) {
      continue;
    }
    else if ((arr[i] % 3 === 0)||(arr[i] % 5 === 0)) {
      result.push(arr[i]);
    }
  }
  return result;
}

// console.log(fizzBuzz([1,2,3,4,5,6,7,8,9,15]))

function isPrime(num) {
  if (num < 2) {return false;}
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {return false};
  }
  return true;
}
// console.log(isPrime(10))

function sumOfNPrimes(n) {
  let sum = 0;
  let i = 2;
  let count = 0;
  while (count < n) {
    if (isPrime(i)) {
      sum += i
      count++
    }
    i++
  }
  return sum;
}




// console.log(sumOfNPrimes(4))
