function getDividersNumberAndSum(N) {
  let dividersCount = 0;
  let dividersSum = 0;

  for (let i = 1; i <= N; i++) {
    if (N % i == 0) {
      dividersCount++;
      dividersSum += i;
    }
  }
  console.log(dividersCount, dividersSum);
}

getDividersNumberAndSum(12);
