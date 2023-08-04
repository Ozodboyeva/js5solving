function isPowerN(K, N) {
  if (K <= 0 || N <= 0) {
    return false;
  }

  let pow = 1;
  while (pow <= K) {
    if (pow === K) {
      return true;
    }
    pow *= N;
  }

  return false;
}

let res = isPowerN(13, 9);
console.log(res);
