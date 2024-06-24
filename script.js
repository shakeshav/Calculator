const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const buttonValue = buttons[i].textContent;
    if (buttonValue === "AC") {
      clearResult();
    } else if (buttonValue === "DE") {
      deleteLastDigit();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  result.value = "";
}

function deleteLastDigit() {
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
}

function appendValue(buttonValue) {
  result.value = result.value + buttonValue;
}
