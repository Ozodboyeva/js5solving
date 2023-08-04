function factorial(N) {
  if (N < 0) {
    return 1;
  }
  let qiy = 1;

  for (let i = 1; i <= N; i++) {
    qiy *= i;
  }

  return qiy;
}
let res = factorial(-3);
console.log(res);
//factorial manfiy bolsa 1 qatarsin
