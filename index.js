
var numberOfButton = document.querySelectorAll(".button1").length;
var currentValue = "";

for (var i = 0; i < numberOfButton; i++) {
  document.querySelectorAll(".button1")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerText;
    result(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  result(event.key);
});

function result(key) {
  switch (key) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
    case ".":
    case "+":
    case "-":
    case "*":
    case "/":
    case "%":
      currentValue += key;
      document.querySelector("#display").innerText = currentValue;
      break;
    case "c":
    case "C":
      currentValue = "";
      document.querySelector("#display").innerText = "0";
      break;
    case "Enter":
    case "=":
      try {
        currentValue = eval(currentValue);
        document.querySelector("#display").innerText = currentValue;
      } catch (e) {
        document.querySelector("#display").innerText = "Error";
        currentValue = "";
      }
      break;
    case "b":
    case "←":
      currentValue = currentValue.slice(0, -1);
      document.querySelector("#display").innerText = currentValue || "0";
      break;
    default:
      console.log(key);
  }
}

