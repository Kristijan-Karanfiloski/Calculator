const btn = document.querySelectorAll("button");
const dspScreen = document.querySelector(".screen");

let calculation = [];
let accumlativeCalculation;

function calculate(btn) {
  const value = btn.textContent;

  if (value === "CLEAR") {
    calculation = [];
    dspScreen.textContent = ".";
  } else if (value === "=") {
    dspScreen.textContent = eval(accumlativeCalculation);
  } else {
    calculation.push(value);
    accumlativeCalculation = calculation.join("");

    dspScreen.textContent = accumlativeCalculation;
  }
}

btn.forEach((btn) => {
  btn.addEventListener("click", () => calculate(btn));
});
