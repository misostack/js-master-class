// all kind of values

console.log(1);
console.log("1");
console.log(true);
console.log(false);
console.log(0xb10, 0xff0000);
console.log(null);
console.log({ a: 1, b: "2" });

// arithmatic
// 1. Addition
console.log("1 + 2 + 3 + 4 + 5 =", 1 + 2 + 3 + 4 + 5);
// 2. Subtraction
console.log("1 - 2 - 3 - 4 - 5 =", 1 - 2 - 3 - 4 - 5);
// 3. Multiplication
console.log("1 * 2 * 3 * 4 * 5 =", 1 * 2 * 3 * 4 * 5);
// 4. Exponentiation
console.log("2^3 =", 2 ** 3);
// 5. Division
console.log(
  "2/3 =",
  2 / 3,
  (2 / 3).toString().length,
  "6666666666666666".length
);
console.log("1/0 =", 1 / 0, -Infinity);
console.log(
  "Number.MAX_VALUE = ",
  Number.MAX_VALUE,
  "2 ** 1024 === Infinity ? ",
  2 ** 1024 === Infinity
);
console.log("1.0e9 === 1000000000 ?", 1.0e9 === 1000000000);
// 6.Remainder
console.log("5%2 =", 5 % 2);
// 7.Yield
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

console.log("generator().next()", generator().next());
console.log("generator().next()", generator().next());
console.log("generator().next()", generator().next());

let a = generator();

console.log("a.next()", a.next());
console.log("a.next()", a.next());
console.log("a.next()", a.next());
console.log("a.next()", a.next());
// Unary operators
console.log(
  typeof "x",
  typeof 1,
  typeof {},
  typeof 0x2,
  typeof null,
  typeof undefined,
  typeof false,
  typeof function () {},
  typeof class A {},
  typeof Infinity,
  typeof NaN
);

// primitive data types: string, number, boolean, undefined, object(null,function,class, dictionary)

console.log(
  "Operators that use two values are called binary operator.\nThe minus operator can be used both as a binary operator and as a unary operator."
);
console.log(-(10 - 2));

// ternary
console.log(1 == 2 ? "1 == 2" : "1 != 2");

// Truthy vs Falsy
console.log(false);
console.log(true);
console.log('!!""', !!"");
console.log("!!{}", !!{});
console.log("!!0", !!0);
console.log("!!'0'", !!"0");
console.log("!!null", !!null);
console.log("!!null", !!undefined);
console.log("!!NaN", !!NaN);
console.log("!!Infinity", !!Infinity);
console.log("!!class A{}", !!class A {});
console.log("!!function(){}", !!function () {});
console.log("!!0x0", !!0x0);
console.log("NaN == NaN", NaN == NaN);

// Automatic type conversion
console.log("8 * null", console.log(8 * null));
console.log("5" - 1, "5" + 1);
console.log("five" * 2);
console.log(false == 0);
console.log(null == undefined);
// variables
console.log(a.length, function () {}.length);
let b = "" || null || false || undefined || 0 || a.length || "a String";
console.log(b);

let x = 1,
  y = 2,
  z = 3;
console.log(x, y, z, Math.max(x, y, z));

for (let y = 1; y <= 7; y++) {
  let line = "";
  for (let x = 1; x <= y; x++) {
    line += "#";
  }
  console.log(line);
}
