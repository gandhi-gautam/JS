let btn = document.querySelector("button");
console.log(btn);

let mode = "light";

const modeHandler = () => {
  if (mode === "light") {
    mode = "dark";
    document.body.style.backgroundColor = "black";
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
  } else {
    mode = "light";
    document.body.style.backgroundColor = "white";
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
  }
};

btn.addEventListener("click", modeHandler);
