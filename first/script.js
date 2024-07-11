let userInput = prompt("Enter a Number: ");
console.log("UserInput: ", userInput, " multiple of 5: ", userInput % 5 === 0);

let marks = prompt("Enter Marks: ");
if (marks <= 100 && marks >= 80) {
  console.log("For Marks:", marks, "Grade is: A");
} else if (marks <= 79 && marks >= 70) {
  console.log("For Marks:", marks, "Grade is: B");
} else if (marks <= 69 && marks >= 60) {
  console.log("For Marks:", marks, "Grade is: C");
} else if (marks <= 59 && marks >= 50) {
  console.log("For Marks:", marks, "Grade is: D");
} else {
  console.log("For Marks:", marks, "Grade is: F");
}
