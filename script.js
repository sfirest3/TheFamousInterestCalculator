const aprSlider = document.querySelector("#apr");
const interestOutput = document.querySelector("#accumulated");
const principalInput = document.querySelector("#principal");
const periodInput = document.querySelector("#period");
const yearsInput = document.querySelector("#years");
const totalOutput = document.querySelector("#total");

aprSlider.addEventListener("input", () => {
  interestOutput.textContent = aprSlider.value + "%";
});

function periodfrequency(period) {
  if (period === "Yearly") {
    return 1;
  } else if (period === "Quarterly") {
    return 4;
  } else if (period === "Monthly") {
    return 12;
  } else if (period === "Daily") {
    return 365;
  } else {
    return 1;
  }
}

function calculate() {
  const principal = parseFloat(principalInput.value);
  const apr = parseFloat(aprSlider.value) / 100;
  const years = parseFloat(yearsInput.value);
  const period = periodInput.value;

  const frequency = periodfrequency(period);

  if (!isNaN(principal) && !isNaN(apr) && !isNaN(years) && frequency > 0) {
    const total = principal * Math.pow(1 + apr / frequency, frequency * years);

    totalOutput.textContent = total.toFixed(2);
  } else {
    totalOutput.textContent = "........";
  }
}

// Add event listeners to trigger the calculation when inputs change
principalInput.addEventListener("input", calculate);
periodInput.addEventListener("change", calculate);
aprSlider.addEventListener("input", calculate);
yearsInput.addEventListener("input", calculate);
