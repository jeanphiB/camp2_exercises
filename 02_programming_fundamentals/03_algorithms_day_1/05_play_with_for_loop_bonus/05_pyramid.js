// ## A Pyramid of base 7
//
// ```
//    *
//   ***
//  *****
// *******
// ```
for(let i = 0; i < 4; i++) {
  console.log(" ".repeat(3 - i) + "*".repeat(2 * i + 1));
}
