function sumOddEven(N) {
  let odd = 0;
  let even = 0;

  for (let i = 1; i <= N; i++) {
    if (i % 2 == 0) {
      odd += i;
    } else {
      even += i;
    }
  }

  return odd + +even;
}

let res = sumOddEven(10);
console.log(res);
