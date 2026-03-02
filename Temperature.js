function convert() {
  let value = parseFloat(document.getElementById("temperature").value);
  let scale = document.getElementById("scale").value;

  if (isNaN(value)) {
    alert("Please enter a valid number!");
    return;
  }

  let celsius;

  // Convert everything to Celsius first
  switch (scale) {
    case "c":
      celsius = value;
      break;
    case "f":
      celsius = (value - 32) * 5/9;
      break;
    case "k":
      celsius = value - 273.15;
      break;
  }

  // Convert from Celsius to other scales
  let fahrenheit = (celsius * 9/5) + 32;
  let kelvin = celsius + 273.15;

  document.getElementById("result").innerHTML = `
    <p>Celsius: ${celsius.toFixed(2)} °C</p>
    <p>Fahrenheit: ${fahrenheit.toFixed(2)} °F</p>
    <p>Kelvin: ${kelvin.toFixed(2)} K</p>
  `;
}