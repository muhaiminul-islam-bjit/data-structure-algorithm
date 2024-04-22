function po2(n) {
  if (n == 1) return true;

  if (n % 2 === 0) {
    return po2(n / 2);
  }

  return false;
}

function isPowerOf2(n) {
  if (n < 1) return false;

  while (n % 2 === 0) {
    n /= 2;
  }

  return n === 1;
}

console.log(po2(16));
console.log(isPowerOf2(16));
