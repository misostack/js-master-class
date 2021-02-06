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

// FizzBuzz

for (let index = 1; index <= 100; index++) {
  console.log(index, index % 3 ? (index % 5 ? "FizzBuzz" : "Buzz") : "Fizz");
}

// ChessBoard

for (let y = 1; y <= 8; y++) {
  let line = "";
  for (let x = 1; x <= 8; x++) {
    if (y % 2 != 0 && x % 2 == 0) {
      line += "#";
    } else if (y % 2 == 0 && x % 2 != 0) {
      line += "#";
    } else {
      line += " ";
    }
  }
  console.log(line);
}

// Functiona
// const square = function (x) {
//   return x * x;
// };
console.log("2x2=", square(2));
function square(x) {
  return x * x;
}
const safeMode = true;
if (safeMode) {
  square = (x) => 0;
}
console.log("2x2=", square(2));

console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}

console.log(`
### Functions

1. Bindings and Scopes
- Passing by value of primitives values
- Passing by reference of object
`);

let n = 10;
let machine = {
  isOn: false,
  power: {
    n: 0,
  },
};
// let machine2 = { ...machine };
let machine2 = deepClone(machine);

function deepClone(a) {
  if (typeof a !== "object") {
    return a;
  }
  // return JSON.parse(JSON.stringify(a));
  let cloneObject = {};
  Object.keys(a).forEach((k) => {
    cloneObject[k] = deepClone(k);
  });
  return cloneObject;
}

function passByValuePrimitives(n) {
  return n / 2;
}
function passByReferenceObject(machine, n, name) {
  machine.name = name;
  machine.isOn = true;
  machine.power.n = n;
}
console.log("n=", passByValuePrimitives(100));
console.log("n=", n);
passByReferenceObject(machine, 10, "m1");
passByReferenceObject(machine2, 90, "m2");
console.log("machine", machine, machine2);

console.log("-".repeat(20), "NESTED SCOPE");

function testSpeed(callback) {
  callback();
}

let car = {
  name: "Tesla",
  velocity: 120,
  run: function () {
    console.log(this.name, this.velocity);
  },
};

testSpeed(car.run);
testSpeed(car.run.bind(car));

let bike = {
  name: "Martin",
  velocity: 60,
  run: () => {
    console.log(this, "run");
    console.log(this.name, this.velocity);
  },
};

console.log(bike.name, bike.velocity);
bike.run();

let sum = function () {
  return arguments.length == 0
    ? 0
    : Object.values(arguments).reduce((p, c) => p + c);
};
console.log(sum(1, 2, 3, 4, 5));

const calculation = () => {
  console.log("calculation arrow function");
  return arguments.length == 0
    ? 0
    : Object.values(arguments).reduce((p, c) => p + c);
};
console.log(calculation(1, 2, 3, 4, 5));

// const calculation = (...arguments) => {
//   return arguments.length == 0
//     ? 0
//     : Object.values(arguments).reduce((p, c) => p + c);
// };
// console.log(calculation(1, 2, 3, 4, 5));

console.log("ARRAYS");

const numbers = [];

const maxNumber = Math.random() * 100;
for (let i = 0; i < maxNumber; i++) {
  numbers.push(parseInt(Math.random() * 100));
}
console.log(numbers);

console.log(numbers.map((n) => n.toString().padStart(2, 0)));

// example of Queue

const vehicals = [
  "car",
  "bus",
  "bike",
  "motobike",
  "truck",
  "ambulance",
  "policecar",
  "dicker",
];

const remove = function (array, index) {
  // remove at index means = slice(0,index) + slice(index+1)
  return array.slice(0, index).concat(array.slice(index + 1));
};
const slice_vehicals = remove(vehicals, 3);
console.log(slice_vehicals);

function* queueExample(vehicals) {
  for (let i = vehicals.length - 1; i >= 0; i--) {
    yield vehicals.pop();
  }
}

const nextVehical = queueExample(vehicals);

while (vehicals.length > 0) {
  console.log("Removed", nextVehical.next().value, vehicals);
}

console.log(vehicals);
sum = function (arr) {
  return arr.reduce((prev, next) => prev + next);
};
const range = function (start, end) {
  const arr = [];
  while (start <= end) {
    arr.push(start++);
  }
  return arr;
};
console.log(sum(range(0, 10)));

// const reverseArray = function (arr) {
//   // const newArr = [];
//   // while (arr.length > 0) {
//   //   newArr.push(arr.pop());
//   // }
//   // return newArr;
//   const swap = function (arr, a, b) {
//     let tmp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = tmp;
//   };
//   for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//     swap(arr, i, arr.length - 1 - i);
//   }
//   return arr;
// };

const examples = [1, 2, 3, 4, 5];
const reverseArray = function (arr) {
  const swap = function (a, b) {
    let tmp = a;
    a = b;
    b = tmp;
  };
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    swap(arr[i], arr[arr.length - 1 - i]);
  }
  return arr;
};
console.log(reverseArray(examples));

console.log("ABSTRACTION!!!");

const repeat = function (times, action) {
  for (let i = 0; i < times; i++) {
    action(i);
  }
};

let labels = [];
repeat(10, (i) => {
  labels.push(`Label ${i + 1}`);
});
console.log(labels);

const items = [];
repeat(10, (i) => {
  items.push({
    name: i,
    status: Math.floor(Math.random() * 10) % 2 == 0 ? "active" : "inactive",
  });
});
function isStatusEqual(status) {
  return (obj) => obj.status === status;
}

const isActiveStatus = isStatusEqual("active");

let activeItems = items.filter((item) => isActiveStatus(item));
console.log(items, activeItems);

const bigNumbers = range(0, 100);

console.log("🐴👟", "🐴👟".codePointAt(0));
let roseDragon = "🌹🐉";
for (let char of roseDragon) {
  console.log(char);
}
console.log(String.fromCodePoint("🐴👟".codePointAt(0)));
// HOC
var grades = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
];

/*
I want to know a few things about this:

1.The average grade of this classroom
2.The average grade of the boys
The average grade of the girls
The higher note among the boys
The higher note among the girls
*/
const isGender = (g) => (student) => student.sex === g;
const isBoy = isGender("M");
const isGirl = isGender("F");
const getBoys = (grades) => grades.filter(isBoy);
const getGirls = (grades) => grades.filter(isGirl);
const average = (grades) =>
  grades.reduce((acc, curr) => acc + curr.grade, 0) / grades.length;

const classRoomAverage = average(grades);
const girlsAverage = average(getGirls(grades));

console.log("classRoomAverage", classRoomAverage);
console.log("girlsAverage", girlsAverage);
