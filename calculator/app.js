const buttons = document.querySelectorAll("button");
const displayInput = document.getElementById("displayInput");
const operation = document.getElementById("operation");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.innerText;

    if (value === "=") {
      try {
        operation.innerText = displayInput.value;
        displayInput.value = eval(displayInput.value);
      } catch {
        displayInput.value = "Error";
      }
    } 
    else if (value === "C") {
      displayInput.value = "";
      operation.innerText = "";
    } 
    else if (value === "Del") {
      displayInput.value = displayInput.value.slice(0, -1);
    } 
    else {
      displayInput.value += value;
    }
  });
});
