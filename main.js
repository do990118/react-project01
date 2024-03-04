const button = document.getElementById("button");
const template = document.getElementById("template");

let result = "";

function inputValueChange() {
  let inputValue = document.getElementById("inputValue").value;

  for (let j = 1; j <= 9; j++) {
    result += `${inputValue}` + " X " + j + " = " + j * `${inputValue}` + "\n";
  }
}

button.addEventListener("click", () => {
  template.innerText = result;

  result = "";
});

function showRes(e) {
  if (e.keyCode === 13) {
    template.innerText = result;

    result = "";
  }
}
