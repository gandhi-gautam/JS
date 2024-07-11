// // let marks = [85, 97, 44, 37, 76, 60];
// // let avg = 0;

// // for (mark of marks) {
// //   avg += mark;
// // }

// // console.log("Avg Marks:", avg / marks.length);

// let prices = [250, 645, 300, 900, 50];

// for (let i = 0; i < prices.length; i++) {
//   prices[i] = prices[i] * 0.9;
// }

// console.log(`New Prices after 10% discount: ${prices}`);

let stores = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

console.log(`stores: ${stores}`);
console.log(stores.shift());
console.log(`stores: ${stores}`);

stores.splice(1, 1, "Ola");
console.log(`stores: ${stores}`);

stores.push("Amazon");
console.log(`stores: ${stores}`);
