function getSum3(N) {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    if (i % 3 == 0) {
      sum += i;
    }
  }
  return sum;
}

let res = getSum3(15);
console.log(res);
//note return bo'lganda log ishlidi return bo'l,maganda ishlamaydi
//45
