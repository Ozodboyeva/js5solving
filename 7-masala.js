function calc(A, B, S) {
  switch (S) {
    case "+":
      return A + B;
    case "-":
      return A - B;
    case "*":
      return A * B;
    case "/":
      return A / B;
    default:
      return 0;
  }
}

let res = calc(10, 15, 8);
console.log(res);
