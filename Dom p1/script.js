// let h2 = document.querySelector("h2");
// console.dir(h2);

// h2.innerText = h2.innerText + " from Gautam Gandhi.";

let divs = document.querySelectorAll(".box");
console.dir(divs);

let idx = 0;
for (let div of divs) {
  div.innerText = `New Value ${idx}`;
  idx++;
}
