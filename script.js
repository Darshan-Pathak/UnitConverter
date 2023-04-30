// Get the input and output elements
const kmInput = document.getElementById("km-input");
const mOutput = document.getElementById("m-output");
const ftOutput = document.getElementById("ft-output");
const inOutput = document.getElementById("in-output");

// Listen for the convert button click
document.getElementById("convert").addEventListener("click", () => {
  // Get the value of the input in kilometers
  const km = parseFloat(kmInput.value);

  // Convert kilometers to meters, feet, and inches
  const m = km * 1000;
  const ft = km * 3280.84;
  const inch = km * 39370.1;

  // Display the converted values in the output elements
  mOutput.innerHTML = m.toFixed(2) + " m";
  ftOutput.innerHTML = ft.toFixed(2) + " ft";
  inOutput.innerHTML = inch.toFixed(2) + " in";
});
