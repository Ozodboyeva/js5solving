function numberOfRoots(a, b, c) {
  let d = b * b - 4 * a * c;

  if (d > 0) {
    return 2;
  } else if (d == 0) {
    return 1;
  } else {
    return 0;
  }
}
let res = numberOfRoots(1, -6, 9);
console.log(res);
//1 -6 9 given the functions
