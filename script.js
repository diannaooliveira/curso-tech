function appendCharacter(char) {
    var display = document.getElementById("display");
    display.value += char;
  }
  
  function clearDisplay() {
    var display = document.getElementById("display");
    display.value = "";
  }
  
  function deleteLastCharacter() {
    var display = document.getElementById("display");
    var value = display.value;
    display.value = value.substring(0, value.length - 1);
  }
  
  function calculate() {
    var display = document.getElementById("display");
    var result = eval(display.value);
    display.value = result;
  }