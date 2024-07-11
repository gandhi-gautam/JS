// function sumOf2Numbers(num1, num2) {
//   console.log(`${num1} + ${num2} : ${num1 + num2}`);
// }

// const arrowSum = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(arrowSum(10, 20));

// return no of vowels in a string
// const calculateNoOfVowel = (msg) => {
//   count = 0;
//   msg = msg.toLowerCase();
//   for (let ch of msg) {
//     if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(
//   `${calculateNoOfVowel(
//     "My Name is Gautam Gandhi"
//   )} Vowels in String My name is Gautam Gandhi`
// );

// print square of each no using forEach loop

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.forEach((num) => {
//   console.log(`${num * num}`);
// });

// filter marks of student that score 90+
// let marks = [10, 20, 30, 40, 50, 60, 70, 80, 90, 99, 87, 97, 57];
// let newArray = marks.filter((val) => {
//   return val >= 90;
// });

// console.log(newArray);

// take input, create an array 1 to n, use reduce to calculate sum of all no's.

let num = prompt("Enter a Number");

let arr = [];
for (let i = 1; i <= num; i++) {
  arr[i - 1] = i;
}

let res = arr.reduce((res, cur) => {
  return res + cur;
});

console.log(res);

res = arr.reduce((res, cur) => {
  return res * cur;
});

console.log(res);
