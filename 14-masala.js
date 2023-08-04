function inverseNumber(N) {
  const reverse = String(N).split("").reverse().join("");
  return parseInt(reverse);
}

let res = inverseNumber(56814);
console.log(res);
