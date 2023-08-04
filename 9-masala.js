function sortABC(a, b, c) {
  let kichik = Math.min(a, b, c);
  let katta = Math.max(a, b, c);
  let orta = Math.round((a + b + c) / 3);

  console.log(kichik + `, ` + orta + `, ` + katta);
}
sortABC(10, 5, 8);
//5,8 10 output
