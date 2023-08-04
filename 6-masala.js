function sumRange(A, B) {
  if (A > B) {
    return 0;
  }

  let sum = 0;
  for (let i = A; i <= B; i++) {
    sum += i;
  }

  return sum;
}

let res = sumRange(8, 10);
console.log(res);
//8 with 10 = 27
