let target = -5;
let num = 3;

target = -num;
target = +num;

console.log(target);

var a = NaN;

if (a === NaN) {
  // Noncompliant; always false
  console.log('a is not a number'); // this is dead code
}
if (a !== NaN) {
  // Noncompliant; always true
  console.log('a is not NaN'); // this statement is not necessarily true
}
